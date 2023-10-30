import express from 'express';
import {getEvents,getEvent, setEvent, deleteEvent, updateEvent,registerationDetails} from '../Controllers/eventsController.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id',getEvent);
router.put('/setEvent',setEvent);
router.delete('/deleteEvent/:id',deleteEvent);
router.patch('/updateEvent/:id',updateEvent);
router.post('/:id/registerationDetails',registerationDetails);
export default router;