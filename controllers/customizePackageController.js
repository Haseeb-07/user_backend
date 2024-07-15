const CustomizeModel = require('../models/customizePackageModel');

// Controller to handle POST request for saving customize package details
const createCustomizePackage = async (req, res) => {
  try {
    const customizePackage = new CustomizeModel(req.body);
    await customizePackage.save();
    res.status(201).json({ message: 'Customize package details saved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save customize package details.' });
  }
};

module.exports = { createCustomizePackage };
