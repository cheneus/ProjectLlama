// grab the things we need
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
	name: {
		type: Array,
		required: true
	},
	placeSuggestion: [{
		type: Schema.Types.ObjectId,
		ref: 'place'
	}],
});

// we need to create a model using it
const Suggestion = mongoose.model('suggestion', SuggestionSchema);

// make this available to our Node applications
module.exports = Suggestion;
