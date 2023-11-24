import Razorpay  from 'razorpay';
import User from '../Models/userModel.js';
import Organizer from '../Models/organizerModel.js';
import Event from '../Models/eventsModel.js';

// Initialize Razorpay client
const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_9eSrSMNCJXPlQ2',
  key_secret: 'nhSSk3HMgWrXW9O3rGtq6X63',
});

// Function to make a payment
const makePayment = async(req,res)=>{
  try {
      const numberOfTickets = req.body.numberOfTickets;
      const user_id = req.body.user_id;
      const event_id = req.body.event_id;
      const user = await User.findById(user_id);
      const event = await Event.findById(event_id);
      const ticketPrice = event.tickets.price;
      const amount = ticketPrice * numberOfTickets;
      const options = {
        amount: amount,
        currency: 'INR',
        receipt: 'kaif.sayyad@spit.ac.in'
      }

      razorpayInstance.orders.create(options, 
        (err, order)=>{
            if(!err){
              console.log(order.id);
                res.status(200).send({
                  success:true,
                  msg:'Order Created',
                  order_id:order.id,
                  amount:amount,
                  name: user.username,
                  email: user.email,
                  event_id: event_id
                });
            }
            else{
                res.status(400).send({success:false,msg:'Something went wrong!'});
            }
        }
      );

  } catch (error) {
    console.log(error.message);
  }
};

// Function to cancel a payment
const cancelPayment = async (req, res) => {
  try {
    const { orderId, userId } = req.body;

    // Cancel the Razorpay order
    await razorpay.orders.cancel(orderId);

    // Remove the order details from the user's database
    await User.findByIdAndUpdate(userId, { $pull: { orders: { id: orderId } } });

    res.status(200).json({ message: 'Payment canceled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to update user's database
const updateUserDatabase = async (userId, priceList) => {
  try {
    // Update the user's database with payment details
    await User.findByIdAndUpdate(userId, { $push: { priceList: this.priceList } });
  } catch (error) {
    console.error(error);
  }
};

// Function to update organizer's database
const updateOrganizerDatabase = async (organizerId, paymentDetails) => {
  try {
    // Update the organizer's database with payment details
    await Organizer.findByIdAndUpdate(organizerId, { $push: { payments: paymentDetails } });
  } catch (error) {
    console.error(error);
  }
};

// Function to update event's database
const updateEventDatabase = async (eventId, paymentDetails) => {
  try {
    // Update the event's database with payment details
    await Event.findByIdAndUpdate(eventId, { $push: { payments: paymentDetails } });
  } catch (error) {
    console.error(error);
  }
};

export{
  makePayment,
  cancelPayment,
  updateUserDatabase,
  updateOrganizerDatabase,
  updateEventDatabase,
};
 