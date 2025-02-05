# Stores project

This project is a demo of how to create a full-stack web application using React and Flask.  It features full CRUD - Create, Read, Update and Delete - functionality.  At this time, there is no or minimal styling, as this repository is meant to illustrate the one front end and the back end talking to each other, and how one can pick any frameworks desired while maintaining operability.

The following packages are used on the back end in its own virtual environment:

- Flask - our back-end framework
- PyMySQL - for tying in MySQL
- Flask-SQLAlchemy - SQLAlchemy with Flask
- Flask-Migrate - for migrations to the database
- python-dotenv - for .env variables, like secret keys
- Flask-CORS - for cross-origin requests with React
- Flask-WTF - for form validations using WTForms

The front end utilizes these packages:
- React - out front-end framework, installed via Vite
- axios - for making requests to the back end and to other sites where needed
- react-router-dom - handles routing on the front end

