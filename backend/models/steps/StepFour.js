const mongoose = require('mongoose');

// Tags

const StepFourSchema = new mongoose.Schema({
	tagTitle: {
		type: String,
		unique: false,
	},
	tagSelected: {
		type: Boolean,
		default: false,
		unique: false,
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

module.exports = mongoose.model('StepFour', StepFourSchema);
