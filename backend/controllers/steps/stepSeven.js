// thoughts

const StepSeven = require('../../models/steps/StepSeven.js');
const Version = require('../../models/Version');
const ErrorResponse = require('../../utils/errorResponse');

exports.createThoughts = async (req, res, next) => {
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
		req.body.thoughts.map((thg) => {
			thg['version'] = req.params.versionId;
		});
		const thoughts = await StepSeven.insertMany(req.body.thoughts);
		if (!thoughts) {
			return next(new ErrorResponse('thoughts not created on StepSeven', 400));
		}

		res.status(200).json({
			success: true,
			data: thoughts,
		});
	} catch (err) {
		next(err);
	}
};

exports.getThoughts = async (req, res, next) => {
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
		const thoughts = await StepSeven.find({ version: req.params.versionId });

		if (!thoughts) {
			return next(
				new ErrorResponse(`error finding thoughs on Step Seven`, 400)
			);
		}
		res.status(200).json({
			success: true,
			data: thoughts,
		});
	} catch (err) {
		next(err);
	}
};
