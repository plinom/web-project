"""
db
"""

import sqlite3 as _sqlite3
import models as _models
import jwt as _jwt

DATABASE_FILE = "./data/users.db"

def connect() -> _sqlite3.Connection:
	con = _sqlite3.connect(DATABASE_FILE, check_same_thread=False)
	return con

def take_cursor(con: _sqlite3.Connection) -> _sqlite3.Cursor:
	cur = con.cursor()
	return cur

def disconnect(con: _sqlite3.Connection) -> None:
  con.close()

def create_table() -> None:
	con = connect()
	cur = take_cursor(con)

	query = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL);"
	cur.execute(query)
	con.commit()
	disconnect(con)

async def get_user_by_email(email: str):
	con = connect()
	cur = take_cursor(con)

	query = "SELECT * FROM users;"
	cur.execute(query)
	rows = cur.fetchall()
	disconnect(con)
	return any(filter(lambda user: user[2] == email, rows))

async def create_user(user: _models.Auth_user):
	con = connect()
	cur = take_cursor(con)

	hash_password = _jwt.encode({"password": user.password}, "secret", algorithm="HS256")

	user_obj = _models.Auth_user(name=user.name, email=user.email, password=hash_password)

	query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?);"
	cur.execute(query, (user_obj.name, user_obj.email, user_obj.password))
	con.commit()
	disconnect(con)
	return True

async def verify_loginning(user: _models.Login_user):
	con = connect()
	cur = take_cursor(con)

	query = "SELECT * FROM users;"
	cur.execute(query)
	con.commit()
	rows = cur.fetchall()
	disconnect(con)

	for row in rows:
		if user.email == row[2]:
			log_user = _models.Login_user(email=row[2], password=row[3])
			return log_user
	
	return False


if __name__ == "__main__":
  create_table()
