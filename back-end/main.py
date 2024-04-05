"""
back end
"""


import fastapi as _fastapi
import models as _models
import database as _database
import jwt as _jwt

app = _fastapi.FastAPI()

@app.post("/api/auth")
async def create_user(user: _models.Auth_user):
	db_user = await _database.get_user_by_email(user.email)
	if db_user:
		raise _fastapi.HTTPException(status_code=400, detail="User with this email exists")

	return await _database.create_user(user)

@app.post("/api/login")
async def login_user(user: _models.Login_user):
	is_loginning = await _database.verify_loginning(user)
	if isinstance(is_loginning, _models.Login_user):
		hash_password = _jwt.encode({"password": user.password}, "secret", algorithm="HS256")
		if hash_password == is_loginning.password:
			return True
		else:
			raise _fastapi.HTTPException(status_code=400, detail="Password incorrect")
	else:
		raise _fastapi.HTTPException(status_code=400, detail="User with this email not found")
