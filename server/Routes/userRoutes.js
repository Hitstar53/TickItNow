import express from 'express';
import {getUsers, createUser, loginUser, getUser, updateUser, deleteUser,getCalendarEvents} from '../Controllers/userController.js';
import{
    makePayment,
    cancelPayment,
    updateUserDatabase,
    updateOrganizerDatabase,
    updateEventDatabase,
} from '../Controllers/paymentController.js';
const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.get('/:id', getUser);
router.post('/login', loginUser);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.post("/:id/getCalendarEvents", getCalendarEvents);
router.post("/makePayment1", makePayment);

export default router;
