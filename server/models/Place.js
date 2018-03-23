// grab the things we need
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PlaceSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	img:{
		type:String,
		required: false
	},
	url: {
		type: String,
		required: true
	},
	tag: [{
		type: String,
	}]
})

// we need to create a model using it
const Place = mongoose.model('place', PlaceSchema)

// make this available to our Node applications
module.exports = Place
