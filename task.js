const mongoose = require('mongoose'); // Import mongoose for MongoDB interaction

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: String,
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    dueDate: Date,

}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

module.exports = mongoose.model('Task', taskSchema); // Export the Task model