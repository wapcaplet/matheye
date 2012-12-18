#! /usr/bin/env python

import os
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/add')
def addition():
    return render_template('addition.html')

@app.route('/multiply')
def multiply():
    return render_template('multiply.html')

@app.route('/division')
def division():
    return render_template('division.html')

@app.route('/multiples')
def multiples():
    return render_template('multiples.html')

@app.route('/quadratic')
def quadratic():
    return render_template('quadratic.html')

@app.route('/linear')
def linear():
    return render_template('linear.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.debug = True
    app.run(host='0.0.0.0', port=port)

