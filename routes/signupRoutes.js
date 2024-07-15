const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

// Route for user signup
router.post('/signup', signupController.signup);

module.exports = router;
