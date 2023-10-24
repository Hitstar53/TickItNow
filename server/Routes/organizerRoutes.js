import express from 'express';
const router = express.Router();
import * as organizerController from '../Controllers/organizerController.js';

// Create a new organizer
router.post('/create', organizerController.createOrganizer);

// Get all organizers
router.get('/', organizerController.getOrganizers);

// Get a single organizer by ID
router.get('/:id', organizerController.getOrganizer);

// Update an organizer by ID
router.patch('/update/:id', organizerController.updateOrganizer);

// Delete an organizer by ID
router.delete('/delete/:id', organizerController.deleteOrganizer);

// Get events by organizer ID
router.get(':id/events', organizerController.getEventsByOrganizerId);

router.post('/login',organizerController.loginOrganizer);

export default router;