"""
send mail handling
"""

import dotenv as _dotenv
import ssl as _ssl
import smtplib as _smtplib
import os as _os
import email as _email
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import string as _string
import random as _random
import database as _database

_dotenv.load_dotenv()

MAIL_HOST = _os.environ.get("MAIL_HOST")
MAIL_USERNAME = _os.environ.get("MAIL_USERNAME")
MAIL_PASSWORD = _os.environ.get("MAIL_PASSWORD")
MAIL_PORT = _os.environ.get("MAIL_PORT")

async def generate_random_symbols():
  symbols = _string.digits + _string.punctuation
  return ''.join(_random.choice(symbols) for i in range(10))

async def mail_submit(to: str):
  random_symbols = await generate_random_symbols()

  message = MIMEMultipart("alternative")
  message["Subject"] = "multipart test"
  message["From"] = MAIL_USERNAME
  message["To"] = to
  
  text = f"{random_symbols}"

  part1 = MIMEText(text, "plain")

  message.attach(part1)

  content = _ssl.create_default_context()
  with _smtplib.SMTP_SSL(MAIL_HOST, MAIL_PORT, context=content) as server:
    server.login(MAIL_USERNAME, MAIL_PASSWORD)
    server.sendmail(MAIL_USERNAME, to, message.as_string())
    update_code_state = await _database.update_code(to, random_symbols)
    if update_code_state:
      return True

  return False
