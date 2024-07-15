const express = require('express');
const router = express.Router();
const PendingBooking = require('../models/PendingBooking'); // Adjust the path as necessary

// Route to get bookings by email
router.get('/mybookings', async (req, res) => {
  try {
    const email = req.query.email; // Get email from query parameters

    // Fetch bookings where the booked_by.email matches the provided email
    const bookings = await PendingBooking.find({ 'booked_by.email': email });

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
