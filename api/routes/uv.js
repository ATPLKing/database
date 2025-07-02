const express = require('express');
const router = express.Router();
const uvController = require('../controllers/uv');


/**
 * @route GET /api/uvs
 * @description Get the uv's List
 */
router.get('/api/uvs', uvController.getUVList);

/**
 * @route GET /subjects/:uv
 * @description GET the subject's list by UV
 */
router.get("/api/subjects/:uv", uvController.getSubjectListByUV);

module.exports = router;