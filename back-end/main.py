"""
back end
"""


import fastapi as _fastapi
import models as _models
import database as _database
import jwt as _jwt
from fastapi.middleware.cors import CORSMiddleware
import email_handling as _email_handling
import random as _random
import string as _string
import typing as _typing

class RandomCode:
	def __init__(self, code):
		self.code = code
	
	def get_code(self):
		return self.code
	
	def set_code(self, code: str):
		self.code = code

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
	random_value = ''.join(_random.choice(_string.punctuation) for i in range(10))
	random_object = RandomCode(random_value)
	send_response = await _email_handling.mail_submit(data.email, random_object.get_code())
	if send_response:
		raise _fastapi.HTTPException(status_code=200, detail="Letter send successfully")
	raise _fastapi.HTTPException(status_code=200, detail="The letter was not sent")

@app.post("/api/code/")
async def check_code(data: _models.CheckCode, random_object: RandomCode = _fastapi.Depends()):
	check_code_res = await _email_handling.check_code(data.code, random_object.get_code())
	if check_code_res:
		raise _fastapi.HTTPException(status_code=200, detail="Code correct")
	raise _fastapi.HTTPException(status_code=200, detail="Incorrect code")
