const Version = require('../models/Version.js');

const ErrorResponse = require('../utils/errorResponse.js');
// @desc Create new version
// @route POST /api/v1/versions
// @access Private

exports.createVersion = async (req, res, next) => {
	try {
		req.body['user'] = req.user._id;

		// check duplication verison by the same user

		const versionsByUser = await Version.find({
			user: req.user._id,
		});

		let alreadyFound = false;

		versionsByUser.forEach((v) => {
			if (v.versionName === req.body.versionName) {
				alreadyFound = true;
			}
		});

		if (alreadyFound) {
			return next(new ErrorResponse('No two versions can have same name'));
		}

		const version = await Version.create(req.body);

		if (!version) {
			return next(new ErrorResponse(`error creating new version`, 400));
		}

		res.status(201).json({
			success: true,
			data: version,
		});
	} catch (err) {
		// res.status(400).json({
		// 	success: false,
		// });

		next(err);
	}
};

// @desc Get All versions
// @route GET /api/v1/versions
// @access Private

exports.getVersions = async (req, res, next) => {
	const versions = await Version.find({
		user: req.user._id,
	});

	if (!versions) {
		res.status(400).json({
			success: false,
			message: 'error finding versions',
		});
	}

	res.status(200).json({
		success: true,
		data: versions,
		count: versions.length,
	});
};

// @desc Update Version
// @route PUT /api/v1/versions/:id
// @access Private

exports.updateVersion = async (req, res, next) => {
	try {
		const updatedVersion = await Version.findByIdAndUpdate(
			req.params.id,
			req.body
		);

		if (!updatedVersion) {
			return res.status(400).json({
				success: false,
				message: 'no version found with the id of' + req.params.id,
			});
		}

		res.status(200).json({
			success: true,
			data: updatedVersion,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
		});
	}
};

// @desc Delete Version
// @route DELETE /api/v1/versions/:id
// @access Private

exports.deleteVersion = async (req, res, next) => {
	const deleted = await Version.findByIdAndDelete(req.params.id);

	if (!deleted) {
		res.status(400).json({
			success: false,
			message: 'no version found with the id of' + req.params.id,
		});
	}

	res.status(200).json({
		success: true,
		data: deleted,
	});
};
