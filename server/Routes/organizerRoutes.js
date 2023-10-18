const express = require('express');
const router = express.Router();
const organizerController = require('../controllers/organizerController');

// Create a new organizer
router.post('/organizers', organizerController.createOrganizer);

// Get all organizers
router.get('/organizers', organizerController.getOrganizers);

// Get a single organizer by ID
router.get('/organizers/:id', organizerController.getOrganizer);

// Update an organizer by ID
router.put('/organizers/:id', organizerController.updateOrganizer);

// Delete an organizer by ID
router.delete('/organizers/:id', organizerController.deleteOrganizer);

// Get evenets by organizer ID
router.get('/organizers/:id/events', organizerController.getEventsByOrganizerId);

module.exports = router;
