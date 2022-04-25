// actions

const StepFive = require('../../models/steps/StepFive.js');
const Version = require('../../models/Version');
const ErrorResponse = require('../../utils/errorResponse.js');

exports.createActions = async (req, res, next) => {
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

		req.body.actions.map((action) => {
			action['version'] = req.params.versionId;
			let date = new Date(action.actionDate);
			action['actionDate'] = date;
		});
		const action = await StepFive.insertMany(req.body.actions);
		if (!action) {
			return next(new ErrorResponse('actions not created on StepFive', 400));
		}

		res.status(200).json({
			success: true,

			data: action,
		});
	} catch (err) {
		next(err);
	}
};

exports.getActions = async (req, res, next) => {
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

		const actions = await StepFive.find({ version: req.params.versionId });

		if (!actions) {
			return next(new ErrorResponse(`error finding actions on StepFive`, 400));
		}
		res.status(200).json({
			success: true,
			count: actions.length,
			data: actions,
		});
	} catch (err) {
		next(err);
	}
};
