console.log('resultRouter R')

const express = require('express')
const bodyParser = require('body-parser')
const db = require('../models')

// const mongoose = require("mongoose");
// mongoose.Promise = Promise

const resultRouter = express.Router()
resultRouter.use(bodyParser.urlencoded({ extended: false }))
resultRouter.use(bodyParser.json())

resultRouter.route('/')
  .get((req, res, next) => {
    db.Product.find({})
      .then(function (data) {
        var product = []
        data.map(x => product.push(x.title))
        res.send(`what is returned ==> ${product}`)
      })
      .catch((err) => {
        // If an error occurred, send it to the client
        res.json(err)
      })
  })

resultRouter.route('/:title')
  .get((req, res, next) => {
    console.log(req.params.title)
    // const tempTitle = (req.params.title).replace(/\\"/g, "'")
    // console.log(tempTitle + "temp")
    // db.Product.findOne({ title: tempTitle })
    db.Product.findOne({ title: req.params.title })
      // ..and populate all of the notes associated with it
      .populate('comment')
      .then(function (data) {
        console.log('data ' + data)
        // res.json(dbProduct);
        res.render('comment', { comments: data })
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err)
      })
  })

  .post((req, res, next) => {
    console.log(req.body)
    db.Comment.create(req.body)
      .then(function (dbComment) {
        // console.log(`this is ${dbComment}`)
        console.log('title = ' + req.params.title)
        console.log(dbComment._id)
        // return db.Product.findOneAndUpdate({ title: req.params.title }, { comment: dbComment._id });
        return db.Product.findOneAndUpdate({ title: req.params.title }, { $push: { comment: dbComment._id } }, { new: true })
      })
      .then(function (dbProduct) {
        console.log('doing dbProduct')
        // If we were able to successfully update an Article, send it back to the client
        // res.json(dbProduct);
        res.render('comment', { comments: dbProduct })
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err)
      })
  })

module.exports = resultRouter
