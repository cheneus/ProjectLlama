// grab the things we need
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LocationSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	restaurants:[{
		type: Schema.Types.ObjectId,
		ref: 'place'
	}],
	landmarks: [{
		type: Schema.Types.ObjectId,
		ref: 'place'
	}],
	activities: [{
		type: Schema.Types.ObjectId,
		ref: 'place'
	}]
})

// we need to create a model using it
const Location = mongoose.model('location', LocationSchema)

// make this available to our Node applications
module.exports = Location
