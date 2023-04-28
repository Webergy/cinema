from connectionToDatabase import createUser,selectUser

from flask import Flask, jsonify,request
app = Flask(__name__)
@app.route('/register',methods=['POST'])
def register():
    data = request.get_json()
    name=data['name']
    email=data['email']
    password=data['password']
    message=""
    message=createUser(name, email, password)
    request_data = {
        "email": email,
        "message": message,
        "name":name,
        "password": password,
        }
    if message=="user already exists":
        return request_data,200
    if message=="user created":
        return request_data,201
    else:
        request_data={}
        return request_data,500

@app.route('/login',methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    message=selectUser(email, password)
    data=message[0]
    id=data[0]
    name=data[1]
    email=data[2]
    password=data[3]
    request_data = {
        "id":id,
        "email": email,
        "name": name,
        "password": password
    }
    return request_data,200
app.run()