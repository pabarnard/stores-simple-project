from flask_app import db
from sqlalchemy import Uuid, String, Integer, DateTime, Text, insert, select, update, delete
from sqlalchemy.orm import Mapped, mapped_column
import uuid, datetime

class Store(db.Model):
    __tablename__ = 'stores'
    id: Mapped[Uuid] = mapped_column(Uuid, primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    employee_count: Mapped[int] = mapped_column(Integer, nullable=False)
    description: Mapped[int] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime, default=datetime.datetime.now)
    updated_at: Mapped[datetime.datetime] = mapped_column(DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)

    @classmethod
    def create_store(cls, data):
        # Connect to database
        with db.engine.connect() as conn:
            insert_result = conn.execute(insert(cls).values(data)) # Create query statement, with values inserted and other fields generated
            # print(insert_result)
            conn.commit() # Save in database!
            # print(insert_result.inserted_primary_key)
            # print(insert_result.inserted_primary_key[0])
            return insert_result.inserted_primary_key[0]
        
        # Alternate way to save without needing the new primary key
        # new_store = cls(
        #     name=data["name"],
        #     employee_count=data["employee_count"],
        #     description=data["description"],
        # ) # Instantiate the new store
        # db.session.add(new_store)
        # db.session.commit() # Now put in database - don't forget this line!