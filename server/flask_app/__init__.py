from flask import Flask
from flask_app.config import config # Has config settings for this app
from flask_sqlalchemy import SQLAlchemy # So we can use SQLAlchemy (via the flask-sqlalchemy package)
from flask_migrate import Migrate # To allow database migrations - or create/update columns/tables (via the flask-migrate package)
# from flask_wtf.csrf import CSRFProtect # To make all forms have CSRF tokens (via Flask-WTF package)
from flask_cors import CORS
# Later on we'll add in a database

# App-level stuff is defined here, such as the app itself, secret and API keys (loaded from .env files), etc.
app = Flask(__name__)
app.config.from_object(config.Config) # Bring in class object directly, which has the needed config properties
CORS(app,origins=["http://localhost:5173"])
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import models and routes here (we'll do this at the end to avoid circular imports)
# from flask_app.models import store
from flask_app.controllers import main_controller