from exts import db

class User(db.Model):
    __tablename__ = 'shu'
    num = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50),nullable=False)
    time = db.Column(db.Integer,nullable=False)
    pre = db.Column(db.String(50), nullable=True)
    todo = db.Column(db.Integer,nullable=True)
    ES = db.Column(db.Integer)
    EF = db.Column(db.Integer)
    TF = db.Column(db.Integer)
    LS = db.Column(db.Integer)
    FF = db.Column(db.Integer)
    LF = db.Column(db.Integer)