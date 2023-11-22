import express from 'express';
const router = express.Router();
import{
    makePayment,
    cancelPayment,
    updateUserDatabase,
    updateOrganizerDatabase,
    updateEventDatabase,
} from '../Controllers/paymentController.js';

router.post('/', makePayment);
router.post('/payment/cancel', cancelPayment);
router.put('/updateUser', updateUserDatabase);
router.put('/updateOrganizer', updateOrganizerDatabase);
router.put('/updateEvent', updateEventDatabase);

export default router;

