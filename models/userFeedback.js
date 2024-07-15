const mongoose = require('mongoose');

const userFeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cityDistrict: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const UserFeedback = mongoose.model('UserFeedback', userFeedbackSchema);

module.exports = UserFeedback;
