// contacts

const StepSix = require('../../models/steps/StepSix.js');
const Version = require('../../models/Version');
const ErrorResponse = require('../../utils/errorResponse');

exports.createContacts = async (req, res, next) => {
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

		req.body.contacts.map((contact) => {
			contact['version'] = req.params.versionId;
		});

		const contacts = await StepSix.insertMany(req.body.contacts);
		if (!contacts) {
			return next(new ErrorResponse('contacts not created on StepSix', 400));
		}

		res.status(200).json({
			success: true,
			data: contacts,
		});
	} catch (err) {
		next(err);
	}
};

exports.getContacts = async (req, res, next) => {
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

		const contacts = await StepSix.find({ version: req.params.versionId });

		if (!contacts) {
			return next(new ErrorResponse(`error finding contacts on Step Six`, 400));
		}
		res.status(200).json({
			success: true,
			count: contacts.length,
			data: contacts,
		});
	} catch (err) {
		next(err);
	}
};
