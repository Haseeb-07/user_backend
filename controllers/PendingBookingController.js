const PendingBooking = require('../models/PendingBooking');

// Controller function to create a pending booking
exports.createPendingBooking = async (req, res) => {
  try {
    const { package_name, booked_by_email, numberOfPersons, phoneNo, pickupLocation, cnic, destinations } = req.body;

    // Create a new pending booking instance
    const pendingBooking = new PendingBooking({
      package_name,
      booked_by: { email: booked_by_email },
      numberOfPersons,
      phoneNo,
      pickupLocation,
      cnic,
      destinations, // Include destinations field
    });

    // Save the pending booking to the database
    const savedBooking = await pendingBooking.save();

    // Respond with the created booking data
    res.status(201).json(savedBooking);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: error.message });
  }
};
