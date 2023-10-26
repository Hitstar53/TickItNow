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
      type: Array,
      required: true,
    },
    rating:{
      type: Number
    },
    tags:{
      type: Array,
    },
    genre:{
      type: String,
      required: true
    },
    language:{
      type: String,
      required: true
    },
    ageRating:{
      type: Number,
      required: true
    },
    runtime:{
      type: String,
      required: true
    },
    startDate:{
      type : String,
      required: true
    },
    endDate:{
      type : String,
      required: true
    },
    location:{
      type: String,
      required: true
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organizer'
    },
    registrations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
  }
);


const Events = mongoose.model('Event', eventsSchema);

export default Events;