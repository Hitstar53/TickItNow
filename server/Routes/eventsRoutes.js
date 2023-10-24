import express from 'express';
import {getEvents,getEvent, setEvent, deleteEvent, updateEvent,registerationDetails,priceDetails} from '../Controllers/eventsController.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id',getEvent);
router.put('/setEvent',setEvent);
router.delete('/deleteEvent/:id',deleteEvent);
router.patch('/updateEvent/:id',updateEvent);
router.post('/:id/registerationDetails',registerationDetails);
router.get('/:id/registerationDetails',priceDetails);
export default router;