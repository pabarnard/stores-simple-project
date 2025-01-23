from flask_app import app
from flask import jsonify
# Later on we'll import models

@app.route("/")
def home_route():
    return jsonify({"message":"Hello there!"}), 200