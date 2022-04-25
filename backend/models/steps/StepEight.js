const mongoose = require('mongoose');

// Tags

const StepEightSchema = new mongoose.Schema({
	tagTitle: {
		type: String,
	},
	tagSelected: {
		type: Boolean,
		default: false,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
	version: {
		type: mongoose.Schema.ObjectId,
		ref: 'Version',
		required: false,
	},
});

module.exports = mongoose.model('StepEight', StepEightSchema);
