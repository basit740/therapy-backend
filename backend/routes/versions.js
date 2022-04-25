const express = require('express');

const {
	createVersion,
	getVersions,
	updateVersion,
	deleteVersion,
} = require('../controllers/versions');

const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.route('/').post(protect, createVersion).get(protect, getVersions);
router.route('/:id').put(protect, updateVersion).delete(protect, deleteVersion);

module.exports = router;
