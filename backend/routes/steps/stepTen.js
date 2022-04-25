// tags
const { protect } = require('../../middleware/auth');

const express = require('express');

const { createTags, getTags } = require('../../controllers/steps/stepTen.js');

const router = express.Router();

router.route('/:versionId').post(createTags).get(getTags);

module.exports = router;
