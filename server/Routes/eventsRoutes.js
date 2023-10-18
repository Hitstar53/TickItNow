import express from 'express';
import {getEvents} from '../Controllers/eventsController.js';

const router = express.Router();

router.get('/events', getEvents);

export default router;