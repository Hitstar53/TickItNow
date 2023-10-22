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
      type: Object,
      data: Buffer,
      contentType: String
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