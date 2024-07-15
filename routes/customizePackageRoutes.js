const express = require('express');
const { createCustomizePackage } = require('../controllers/customizePackageController');

const router = express.Router();

// Route to handle POST request for saving customize package details
router.post('/customize', createCustomizePackage);

module.exports = router;
