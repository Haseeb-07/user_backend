const Login = require('../models/login');

// Controller for handling user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords (simple comparison, not recommended for production)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, return success
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
