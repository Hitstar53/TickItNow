const express = require('express');
const router = express.Router();
const organizerController = require('../controllers/organizerController');

// Create a new organizer
router.post('/', organizerController.createOrganizer);

// Get all organizers
router.get('/', organizerController.getOrganizers);

// Get a single organizer by ID
router.get('/:id', organizerController.getOrganizer);

// Update an organizer by ID
router.put('/:id', organizerController.updateOrganizer);

// Delete an organizer by ID
router.delete(':id', organizerController.deleteOrganizer);

// Get events by organizer ID
router.get(':id/events', organizerController.getEventsByOrganizerId);

module.exports = router;
