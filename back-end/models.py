"""
db models
"""

import pydantic as _pydantic

class Auth_user(_pydantic.BaseModel):
	name: str
	email: str
	password: str

class Login_user(_pydantic.BaseModel):
	email: str
	password: str
