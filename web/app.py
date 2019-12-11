from flask_restful import Resource, Api
from flask import request, app, Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Rotas de paginas
@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/cadastro')
def signin():
	return render_template('cadastro.html')

@app.route('/campo')
def field():
	return render_template('campo.html')

@app.route('/cadastro-campo')
def field_signin():
	return render_template('cadastro-campo.html')

@app.route('/')
def home():
	return render_template('home.html')

app.run(debug=True)
