const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const destinationRoutes = require('./routes/destinationRoutes');
const packageRoutes = require('./routes/packageRoutes');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const pendingBookingRoutes = require('./routes/pendingBookingRoutes');
const customizePackageRoutes = require('./routes/customizePackageRoutes');
const mybookings = require('./controllers/mybookings');
dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/destinations', destinationRoutes);
app.use('/packages', packageRoutes);
app.use(signupRoutes);
app.use(loginRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/', pendingBookingRoutes);
app.use('/api', customizePackageRoutes);
app.use('/api', mybookings);



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
