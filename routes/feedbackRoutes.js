const express = require('express');
const router = express.Router();
const userFeedbackController = require('../controllers/userFeedbackController');

// Route to handle user feedback submission
router.post('/submit', userFeedbackController.submitFeedback);

// Route to get all feedbacks
router.get('/feedbacks', userFeedbackController.getAllFeedbacks);

module.exports = router;
