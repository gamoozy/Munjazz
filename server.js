const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://alimohamed2004:vSFkcMLQBfmy9CVQ@monjazzcluster1.lfprnvr.mongodb.net/?retryWrites=true&w=majority&appName=MonjazzCluster1');

// 👉 ADD THIS LINE to link user routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// (optional) other routes
// const bookingRoutes = require('./routes/bookings');
// app.use('/bookings', bookingRoutes);

const PORT = process.env.PORT; // Ensure it picks the Railway port

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

