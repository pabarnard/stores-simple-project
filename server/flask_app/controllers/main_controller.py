from flask_app import app
from flask import jsonify, request
from flask_app.forms import store_form
from flask_app.models import store
# Later on we'll import models

@app.route("/api/v1/stores/new", methods=["POST"])
def add_new_store():
    # print(request.data)
    # print(request.form)
    # Grab data for our form and put it into a WTForm object so we can validate
    new_store_form = store_form.StoreForm(request.form)
    if new_store_form.validate(): # If validations succeed
        # print("Validations succeed")
        new_store_dictionary = { # Grab data from form
            "name": request.form["name"],
            "employee_count": request.form["employee_count"],
            "description": request.form["description"],
        }
        new_store_primary_key = store.Store.create_store(new_store_dictionary) # Save in database
        return jsonify({"id": new_store_primary_key}), 201 # We successfully created a store in the database, so return a 201 response
    else: # Validations failed, so return the error messages
        return jsonify(new_store_form.errors), 400

# Testing route only
@app.route("/")
def home_route():
    return jsonify({"message":"Hello there!"}), 200