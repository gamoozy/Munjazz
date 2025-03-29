const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send('Booking saved!');
});

module.exports = router;
