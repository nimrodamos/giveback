const Donation = require("../models/Donation"); // Import your Donation model
const Project = require("../models/Project"); // Import your Project model

// Create a new donation and update the project's current amount
const createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();

    // Update the project's current_amount
    await Project.findByIdAndUpdate(donation.project_id, {
      $inc: { current_amount: donation.amount },
    });

    res.status(201).send(donation);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all donations for a specific project
const getDonationsByProjectId = async (req, res) => {
  try {
    const donations = await Donation.find({ project_id: req.params.id });
    res.send(donations);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get all donations for a specific user
const getDonationsByUserId = async (req, res) => {
  try {
    const donations = await Donation.find({ user_id: req.params.id });
    res.send(donations);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createDonation,
  getDonationsByProjectId,
  getDonationsByUserId,
};