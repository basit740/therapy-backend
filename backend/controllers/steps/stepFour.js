// tags

const StepFour = require('../../models/steps/StepFour.js');
const Version = require('../../models/Version.js');
const ErrorResponse = require('../../utils/errorResponse.js');

exports.createTags = async (req, res, next) => {
	try {
		const version = await Version.findById(req.params.versionId);
		if (!version) {
			return next(
				new ErrorResponse(
					`no version found with the id of ${req.params.versionId}`,
					404
				)
			);
		}

		req.body.tags.map((tag) => {
			tag['version'] = req.params.versionId;
		});

		const returnedTags = await StepFour.insertMany(req.body.tags);
		if (!returnedTags) {
			return next(new ErrorResponse('tags not created on StepFour', 400));
		}

		res.status(200).json({
			success: true,
			data: returnedTags,
		});
	} catch (err) {
		next(err);
	}
};

exports.getTags = async (req, res, next) => {
	try {
		const version = await Version.findById(req.params.versionId);
		if (!version) {
			return next(
				new ErrorResponse(
					`no version found with the id of ${req.params.versionId}`,
					404
				)
			);
		}

		const tags = await StepFour.find({ version: req.params.versionId });

		if (!tags) {
			return next(new ErrorResponse('error finding tags on StepFour'));
		}
		res.status(200).json({
			success: true,
			data: tags,
		});
	} catch (err) {
		next(err);
	}
};
