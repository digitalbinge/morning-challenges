/* 

  Our login form is broken!

  Right now, users can get through with any password. Try it out.

  Help!

  1. Only let users through if they enter the password 'dog'.
     (Hint: you'll need body-parser to get the form info)
  2. Return a 401 if any other password is entered.

  Beast mode:

  1. Only let users through if they also check "I agree".
  2. Add an email field to the login form. Update your password check.
  3. Store a list of users, along with their passwords in an array of objects.
     Update your password check to use this array for authentication.
  4. Keep count of login failures. Display these on the 401 page.
     E.g. "You've tried to login 3 times". Make sure it works per user.
  5. Reset the login failures to 0 if they successfully log in.
  6. Store the users in mongo instead on this file.
  
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = {
  'test@test.com': {
    password: 'dog',
    count: 0
  },
  'test1@test.com': {
    password: 'dog1',
    count: 0
  },
  'test2@test.com': {
    password: 'dog2',
    count: 0
  }
}

app.use(bodyParser.urlencoded({extended: true}));
// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(express.static('public'));

// Views #thepuglifechoseme
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('login');
});

app.post("/secure", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let agree = req.body.agree;
  let authenticated = false;

  if (users[email] && users[email].password === password && agree === 'on') {
    authenticated = true;
  }

  if (authenticated) {
    users[email].count = 0;
    res.render('secure');
  } else {
    if (users[email]) {
      users[email].count++
      res.status(401).send(`Error, you have reached ${users[email].count} attempts.`)
    } else {
      res.send(401)
    }
  }
});

app.listen(3000);
console.log("Lift off!");
