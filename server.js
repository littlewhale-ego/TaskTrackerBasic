const express = require('express'); // Import the express module
const mongoose = require('mongoose'); // Import mongoose for MongoDB interaction
const cors = require('cors'); // Import CORS for cross-origin resource sharing
require('dotenv').config(); // Load environment variables from .env file

const taskRoutes = require('./taskRoutes'); // Import task routes

const app = express(); // Create an Express application

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api/tasks', taskRoutes); // Use task routes for /api/tasks endpoint

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(5000, () => console.log('Server is running on port 5000')); // Start the server
    })
    .catch(err => console.error('MongoDB connection error:', err)); // Handle connection errors