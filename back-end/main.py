"""
back end
"""


import fastapi as _fastapi
import models as _models
import database as _database
import jwt as _jwt
from fastapi.middleware.cors import CORSMiddleware
import email_handling as _email_handling
import typing as _typing

app = _fastapi.FastAPI()


# origin = "http://localhost:5173/"

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

@app.post("/api/auth/")
async def create_user(user: _models.Auth_user):
	db_user = await _database.get_user_by_email(user.email)
	if db_user:
		raise _fastapi.HTTPException(status_code=200, detail="User with this email exists")
	status = await _database.create_user(user)
	return {"detail": str(status)}

@app.post("/api/login/")
async def login_user(user: _models.Login_user):
	is_loginning = await _database.verify_loginning(user)
	if isinstance(is_loginning, _models.Login_user):
		hash_password = _jwt.encode({"password": user.password}, "secret", algorithm="HS256")
		if hash_password == is_loginning.password:
			return {"detail": "True"}
		else:
			raise _fastapi.HTTPException(status_code=200, detail="Password incorrect")
	else:
		raise _fastapi.HTTPException(status_code=200, detail="User with this email not found")

@app.post("/api/password/")
async def forgot_password(data: _models.ForgotPassword):
	send_response = await _email_handling.mail_submit(data.email)
	if send_response:
		raise _fastapi.HTTPException(status_code=200, detail="Letter send successfully")
	raise _fastapi.HTTPException(status_code=200, detail="User with this email not found")

@app.post("/api/code/")
async def check_code(code: _models.CheckCode):
	is_code_correct = await _database.check_if_code_exists(code.code)
	if is_code_correct:
		raise _fastapi.HTTPException(status_code=200, detail="Code correct")
	raise _fastapi.HTTPException(status_code=200, detail="Code incorrect")
