const jwt = require('jsonwebtoken');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config');

/**
 * Return the Passport Local Strategy object.
 */
const strategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
}, (req, email, password, done) => {
  console.log('inside local-login');
  console.log(req.body);
  const userData = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(userData);
  console.log('**********');
  // find a user by email address
  User.findOne({ email: userData.email }, (err, user) => {
    console.log('finding email');
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }
    // if (!user.checkPassword(password)) {
    //   return done(null, false, { message: 'Incorrect password' })
    // }
    // check if a hashed user's password is equal to a value saved in the database
    console.log(password);
    console.log(user);
    console.log(`${userData } user `);
    // check the auth @ model method
    user.checkPassword(userData.password, (err, isMatch) => {
      if (err) throw (err);
      if (isMatch) {
        const payload = {
          sub: user._id,
        };

        // create a token string
        const token = jwt.sign(payload, config.jwtSecret, {
          expiresIn: 86400, // expires in 24 hours
        });
        const data = {
          name: user.email,
        };
        console.log('token = ' + token);
        return done(null, token, data);
      // res.json(token, data)
      }
      return done({ success: false, msg: 'Wrong Password' });

      // , (isMatch, err ) => {
      // console.log("checking")
      // if (err) { return done(err); }

      // if (!isMatch) {
      //   const error = new Error('Incorrect email or password');
      //   error.name = 'IncorrectCredentialsError';

      //   return done(error);
      // }
    });
  });
});
module.exports = strategy;
