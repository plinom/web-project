"""
db
"""

import sqlite3 as _sqlite3
import models as _models
import jwt as _jwt
import email_handling as _email_handling

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

	query = "CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, code TEXT, program_id INTEGER, last_kg TEXT DEFAULT null);"
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

async def update_code(email: str, code: str):
	con = connect()
	cur = take_cursor(con)

	email_state = await get_user_by_email(email)
	if email_state:
		query = f"UPDATE users SET code = '{code}' WHERE email = '{email}';"
		cur.execute(query)
		con.commit()
		disconnect(con)
		return True
	return False

async def check_if_code_exists(code: str):
	con = connect()
	cur = take_cursor(con)

	query = "SELECT * FROM users;"
	cur.execute(query)
	con.commit()
	rows = cur.fetchall()
	disconnect(con)

	for row in rows:
		if row[4] == code:
			return True
	return False

async def new_get_user_by_email(email: str):
  con = connect()
  cur = take_cursor(con)

  query = "SELECT * FROM users;"
  cur.execute(query)
  rows = cur.fetchall()
  disconnect(con)
  return list(filter(lambda user: user[2] == email, rows))[0]

async def get_last_kg_by_email(email: str):
  con = connect()
  cur = take_cursor(con)

  query = "SELECT * FROM users;"
  cur.execute(query)
  rows = cur.fetchall()
  disconnect(con)
  kg_str = list(filter(lambda user: user[2] == email, rows))[0]
  kgs = kg_str.split(',')
  ret_js = []
  if len(kgs) < 6:
    ret_js = [0 for i in range(6-len(kgs))]
  for elem in kgs[-6:]:
    ret_js.append(elem)
  print(json.dumps(ret_js))
  return json.dumps(ret_js)

if __name__ == "__main__":
  create_table()
