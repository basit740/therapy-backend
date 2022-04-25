// feelings

const StepThree = require('../../models/steps/StepThree.js');

const Version = require('../../models/Version.js');
const ErrorResponse = require('../../utils/errorResponse.js');

exports.createFeelings = async (req, res, next) => {
	const version = await Version.findById(req.params.versionId);
	if (!version) {
		return next(
			new ErrorResponse(
				`no version found with the id of ${req.params.versionId}`,
				404
			)
		);
	}

	try {
		const feelings = [...req.body.feelings];
		feelings.map((feeling) => {
			feeling['version'] = req.params.versionId;
		});

		const returnedFeelings = await StepThree.insertMany(req.body.feelings);
		if (!returnedFeelings) {
			return next(new ErrorResponse(`feelings not created on StepThree`, 400));
		}

		res.status(200).json({
			success: true,
			data: returnedFeelings,
		});
	} catch (err) {
		next(err);
	}
};

exports.getFeelings = async (req, res, next) => {
	const version = await Version.findById(req.params.versionId);
	if (!version) {
		return next(
			new ErrorResponse(
				`no version found with the id of ${req.params.versionId}`,
				404
			)
		);
	}
	try {
		const feelings = await StepThree.find({ version: req.params.versionId });

		if (!feelings) {
			res.status(400).json({
				success: false,
				message: 'error finding feelings on StepThree',
			});
			return next(new ErrorEvent(`error finding feelings on StepThree`, 400));
		}
		res.status(200).json({
			success: true,
			data: feelings,
			count: feelings.length,
		});
	} catch (err) {
		next(err);
	}
};
