const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question');

/**
 * @route GET /api/questions/:uv
 * @description Get the uv's related questions
 */
router.get('/api/questions/:uv', questionController.getQuestionsbyUV);

module.exports = router;

