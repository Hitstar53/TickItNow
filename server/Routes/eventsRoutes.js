import express from 'express';
import {getEvents,getEvent} from '../Controllers/eventsController.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id',getEvent);

export default router;