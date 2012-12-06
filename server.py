#! /usr/bin/env python

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/multiply')
def multiply():
    return render_template('multiply.html')

if __name__ == '__main__':
    app.debug = True
    app.run()

