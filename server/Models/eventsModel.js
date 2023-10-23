import mongoose from 'mongoose';

const eventsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,  
    },
    image:{
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating:{
      type: Number
    },
    tags:{
      type: Array,
    }
  }
);


const Events = mongoose.model('Event', eventsSchema);

export default Events;