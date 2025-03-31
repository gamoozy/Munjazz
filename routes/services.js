const express = require('express');
const router = express.Router();
const Service = require('../models/service'); // Import Service model

// Endpoint: Submit Service Details
router.post('/submit', async (req, res) => {
  try {
    const { serviceName, description, imageUrl, audioUrl } = req.body;

    if (!serviceName || !description) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const newService = new Service({ serviceName, description, imageUrl, audioUrl });
    await newService.save();

    res.json({ success: true, message: "Service submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting service:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
