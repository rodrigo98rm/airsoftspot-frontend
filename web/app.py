from flask_restful import Resource, Api
from flask import request, app, Flask, render_template

# Rotas de paginas
@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/cadastro')
def signin():
	return render_template('cadastro.html')

@app.route('/')
def home():
	return render_template('home.html')

app.run(debug=True)
