const SignupUser = require('../models/signupUser');

// Controller for handling user signup
exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, cnic, phoneNumber, streetAddress } = req.body;

    // Check if the email or CNIC or Phone Number is already registered
    const existingUser = await SignupUser.findOne({ $or: [{ email }, { cnic }, { phoneNumber }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or CNIC or Phone Number is already registered' });
    }

    // Create a new user
    const newUser = new SignupUser({
      firstName,
      lastName,
      email,
      password,
      cnic,
      phoneNumber,
      streetAddress
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in user signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
