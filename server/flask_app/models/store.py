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

    @classmethod
    def read_all_stores(cls):
        with db.engine.connect() as conn:
            # print(conn.execute(select(cls)).all())
            info = conn.execute(select(cls)).all() # Grab all our data
            # for cur_row in info:
            #     print(cur_row.tuple())
            #     # print(type(cur_row))
            return [cur_row._asdict() for cur_row in info] # Convert each Row into a dictionary
        # Another way to grab data
        # # print(db.session.scalars(select(cls)))
        # # print(db.session.scalars(select(cls)).all())
        # # print(db.session.execute(select(cls)).scalars().all())
        # all_stores = db.session.scalars(select(cls)).all() # Alternate approach: db.session.execute(select(cls)).scalars().all()
        # # print(type(all_stores[0]))
        # # print(all_stores)
        # return all_stores

    @classmethod
    def read_one_store(cls, data):
        # print("TESTING")
        with db.engine.connect() as conn:
            # print(conn.execute(select(cls)).all())
            info = conn.execute(select(cls).where(cls.id == uuid.UUID(data["id"]))).all() # Grab all our data
        # print(info)
        # this_store = db.get_or_404(cls,uuid.UUID(data["id"])) # Doesn't quite work as it
        return [cur_row._asdict() for cur_row in info] # Convert each Row into a dictionary