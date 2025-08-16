const express = require('express');
const router = express.Router();
const taskController = require('./taskController'); // Import the task controller

router.get('/', taskController.getTasks); // Route to get all tasks
router.post('/', taskController.createTask); // Route to create a new task
router.put('/:id', taskController.updateTask); // Route to update a task by ID
router.delete('/:id', taskController.deleteTask); // Route to delete a task by ID   

module.exports = router; // Export the router for use in server.js