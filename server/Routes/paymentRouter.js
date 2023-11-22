import express from 'express';
import{
    paymentSuccess,
    paymentFailure,
    processPayment
} from '../Controllers/paymentController.js';
const router = express.Router();

// Route for processing payment
router.post('/payment', processPayment);

// Route for handling payment success
router.get('/payment/success', paymentSuccess);

// Route for handling payment failure
router.get('/payment/failure', paymentFailure);

export default router;
