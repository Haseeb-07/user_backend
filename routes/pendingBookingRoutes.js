// routes/pendingBookingRoutes.js

const express = require('express');
const router = express.Router();
const PendingBookingController = require('../controllers/PendingBookingController');

// Route for creating a pending booking
router.post('/pending-bookings', PendingBookingController.createPendingBooking);

module.exports = router;
