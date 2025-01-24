from wtforms import Form, StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, NumberRange
class StoreForm(Form): # Form class that will validate data from the front end
    name = StringField("name",[
        DataRequired(message="Please enter the name of the store!"),
        Length(min=1, max=255, message="The store's name must be 1 through 255 characters, inclusively.")])
    employee_count = IntegerField("employee_count",[
        DataRequired(message="Please enter the number of employees for this store as a whole number!"),
        NumberRange(min=1, message="The store must have at least 1 employee.")])
    description = TextAreaField("description",[
        DataRequired(message="Please give some information about this store!"),
        ])