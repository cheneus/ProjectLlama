console.log('htmlRouter R');

const express = require('express');
const bodyParser = require('body-parser');


const htmlRouter = express.Router();
htmlRouter.use(bodyParser.urlencoded({ extended: false }));
htmlRouter.use(bodyParser.json());

htmlRouter.route('/')
  .get((req, res, next) => {
    console.log('finding');
    if (req.url === '/robots.txt') {
      res.type('text/plain');
      res.send('User-agent: *\nDisallow: /');
    } else {
      // res.json("test")
      // res.json(index.js)
      res.redirect('client/build/index.html');
      // res.direct("index.html")
    }
  });

module.exports = htmlRouter;
