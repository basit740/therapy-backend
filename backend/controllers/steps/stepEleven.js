// benefits

const StepEleven = require('../../models/steps/StepEleven');

const Version = require('../../models/Version');
const ErrorResponse = require('../../utils/errorResponse');

exports.createBenefits = async (req, res, next) => {
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
		req.body.benefits.map((benefit) => {
			benefit['version'] = req.params.versionId;
		});
		const benefits = await StepEleven.insertMany(req.body.benefits);
		if (!benefits) {
			return next(new ErrorResponse('benefits not created on Step Eleven'));
		}

		res.status(200).json({
			success: true,
			data: benefits,
		});
	} catch (err) {
		next(err);
	}
};

exports.getBenefits = async (req, res, next) => {
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
		const benefits = await StepEleven.find({
			version: req.body.versionId,
		});

		if (!benefits) {
			return next(new ErrorResponse('error finding benefits on Step Eleven'));
		}
		res.status(200).json({
			success: true,
			data: benefits,
		});
	} catch (err) {
		next(err);
	}
};
