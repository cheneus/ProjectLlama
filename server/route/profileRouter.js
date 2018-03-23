console.log('profileRoute R');
const User = require('../models/User');
const express = require('express');

const profileRouter = express.Router();
const Verify = require('../passport/verify');


profileRouter.route('/')
  .get(Verify.verifyUser, (req, res, next) => {
    console.log('profile');
    console.log(req.decoded);
    console.log(res.user);
    console.log('++++++');
    User.findById(req.decoded.sub)
      .then((user) => {
        res.status(200).json({
          user,
          message: 'You\'re authorized to see this secret message.',
        });
      })
      .catch((err) => {
        res.status(401).json({
          message: 'You\'re NOT authorized to see this secret message.',
        });
      });
  });

profileRouter.route('/changepass')
  .post(Verify.verifyUser, (req, res, next) => {
    User.findById(req.decoded.sub, (err, userMatch) => {
      console.log('userMatch');
      userMatch.password = req.body.password;
      console.log(userMatch);
      userMatch.save((err, savedUser) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: 'Failed to Update Password',
            errors: err,
          });
        }
        console.log(savedUser);
        res.status(200).json({
          success: true,
          message: 'You have successfully updated your password',
          user: savedUser,
        });
      });
    });
  });
module.exports = profileRouter;
