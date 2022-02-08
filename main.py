from flask import Flask, render_template, redirect, url_for, session, request, flash
from db import db


app = Flask('app')
app.jinja_env.add_extension('pypugjs.ext.jinja.PyPugJSExtension')
app.secret_key = '775af2333a36c92bef689a857fc02a2065419586e62a2a21801a01604014d67b'


@app.route('/')
def index():
    return render_template('index.pug', title="Home", loggedin=session.get('loggedin'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        users = db["users"]
        session = dict(request.form)
        if request.form.get("username") in users:
            username = session.get("username")
            currentuser = users[username]
            if request.form.get("password") == currentuser["password"]:
                session["loggedin"] = True
                flash('You have been succesfully logged in as:&nbsp;<code><b>' + username + '</b></code>.', 'success')
            else:
                flash('Logging in was unsuccessful.', 'error')
        else:
            flash('That username is invalid.', 'error')
    return render_template('login.pug', title="Log In")

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        pass
    return render_template('register.pug', title="Log In")

@app.route('/student')
def student():
    pass


# only used in the absence of `flask run`
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)