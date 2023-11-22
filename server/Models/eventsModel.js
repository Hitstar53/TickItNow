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
    banner:{
      type:String,
      required: true
    },
    tickets: [{
      price: {
          type: Number,
          required: true
      },
      availableTickets: {
          type: Number,
          required: true
      }
  }],
    rating:{
      type: Number
    },
    tags:{
      type: Array,
    },
    genre:{
      type: String,

    },
    language:{
      type: String,

    },
    ageRating:{
      type: String,

    },
    runtime:{
      type: String,

    },
    startDate:{
      type : String,

    },
    endDate:{
      type : String,

    },
    location:{
      type: String,
    },
    latitude:{
      type:String
    },
    longitude:{
      type:String
    },
    artist:{
      type:Array
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organizer'
    },
    registrations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  }
);


const Events = mongoose.model('Event', eventsSchema);

export default Events;