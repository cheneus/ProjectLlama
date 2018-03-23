const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config.js');

exports.verifyUser =  (req, res, next) =>{
  // check header or url parameters or post parameters for token
  console.log(req.headers);
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  console.log(token);
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      console.log(err);
      if (err) {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        return next(err);
      }
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      console.log(req.decoded);
      console.log(decoded);
      User.findById(req.decoded.sub, (userErr, user) => {
          if (userErr || !user) {
            return res.status(401).end();
          }
          next()
        });

    });
  } else {
    // if there is no token
    // return an error
    const err = new Error('No token provided!');
    err.status = 403;
    return next(err);
  }
};
