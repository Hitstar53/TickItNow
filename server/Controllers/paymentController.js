import Razorpay  from 'razorpay';
import User from '../Models/userModel.js';
import Organizer from '../Models/organizerModel.js';
import Event from '../Models/eventsModel.js';

// Initialize Razorpay client
const razorpay = new Razorpay({
  key_id: 'rzp_test_9eSrSMNCJXPlQ2',
  key_secret: 'nhSSk3HMgWrXW9O3rGtq6X63',
});

// Function to make a payment
const makePayment = async(req,res)=>{
  try {
      const amount = req.body.amount*100
      const options = {
          amount: amount,
          currency: 'INR',
          receipt: 'razorUser@gmail.com'
      }

      razorpayInstance.orders.create(options, 
        (err, order)=>{
            if(!err){
                res.status(200).send({
                    success:true,
                    msg:'Order Created',
                    order_id:order.id,
                    amount:amount,
                    key_id:rzp_test_9eSrSMNCJXPlQ2,
                    product_name:req.body.name,
                    description:req.body.description,
                    contact:"8567345632",
                    name: "Sandeep Sharma",
                    email: "sandeep@gmail.com"
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
const updateUserDatabase = async (userId, paymentDetails) => {
  try {
    // Update the user's database with payment details
    await User.findByIdAndUpdate(userId, { $push: { payments: paymentDetails } });
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
