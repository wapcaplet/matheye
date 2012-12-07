#! /usr/bin/env python

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add')
def addition():
    return render_template('addition.html')

@app.route('/multiply')
def multiply():
    return render_template('multiply.html')

if __name__ == '__main__':
    app.debug = True
    app.run()

