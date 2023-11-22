import express from 'express';
import{
    makePayment,
    cancelPayment,
    updateUserDatabase,
    updateOrganizerDatabase,
    updateEventDatabase,
} from '../Controllers/paymentController.js';
const router = express.Router();

router.post('/', makePayment);
router.post('/payment/cancel', cancelPayment);
router.put('/updateUser', updateUserDatabase);
router.put('/updateOrganizer', updateOrganizerDatabase);
router.put('/updateEvent', updateEventDatabase);

export default router;

