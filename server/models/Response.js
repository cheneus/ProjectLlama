// grab the things we need
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
	answers: {
		type: Array,
		required: true
	},
	analysis: {
		type: String,
		required: true
	},
	suggestion: [{
		type: Schema.Types.ObjectId,
		ref: 'suggestion'
	}],
	selected: {
		type: Schema.Types.ObjectId,
		ref: 'suggestion'
	},
	user:{
		type: Schema.Types.ObjectId,
		ref: 'user'
	} 
}, {
	timestamps: true
});

// we need to create a model using it
const Response = mongoose.model('response', ResponseSchema);

// make this available to our Node applications
module.exports = Response;
