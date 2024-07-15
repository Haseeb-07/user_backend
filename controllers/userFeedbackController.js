const UserFeedback = require('../models/userFeedback');

// Controller to handle user feedback submission
exports.submitFeedback = async (req, res) => {
  try {
    const { name, cityDistrict, message } = req.body;

    // Create a new user feedback document
    const feedback = new UserFeedback({
      name,
      cityDistrict,
      message
    });

    // Save the feedback to the database
    await feedback.save();

    res.status(201).json({ success: true, message: 'Feedback submitted successfully!' });
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ success: false, message: 'An error occurred while submitting feedback.' });
  }
};

// Controller to get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
  try {
    // Fetch all feedbacks from the database
    const feedbacks = await UserFeedback.find();

    res.status(200).json({ success: true, feedbacks });
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    res.status(500).json({ success: false, message: 'An error occurred while fetching feedbacks.' });
  }
};
