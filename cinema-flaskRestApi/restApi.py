

from flask import Flask, jsonify
app = Flask(__name__)
@app.route('/register')
def register():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})


@app.route('/login')
def login():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})
app.run()