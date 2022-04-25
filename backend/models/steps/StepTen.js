const mongoose = require('mongoose');
// Tags
const StepTenSchema = new mongoose.Schema({
	tagTitle: {
		type: String,
	},
	tagCategory: {
		type: [String],
		enum: ['rules', 'breakthroughs', 'realizations'],
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

module.exports = mongoose.model('StepTen', StepTenSchema);
