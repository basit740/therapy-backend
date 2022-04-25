const mongoose = require('mongoose');

// benefits

const StepElevenSchema = new mongoose.Schema({
	benefitTitle: {
		type: String,
		required: true,
	},
	benefitValue: {
		type: Number,
		required: true,
	},
	benefitStep: {
		type: [Number],
		enum: [1, 2, 3, 4, 5],
		required: true,
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

module.exports = mongoose.model('StepEleven', StepElevenSchema);
