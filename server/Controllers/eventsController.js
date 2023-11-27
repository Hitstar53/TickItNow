import Events from "../Models/eventsModel.js";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import Organizer from "../Models/organizerModel.js";
import { makePayment } from "./paymentController.js";

const getEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Events.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Events.findById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const setEvent = asyncHandler(async (req, res) => {
    const organizer = req.params.id;
    console.log(organizer);
  try {
    const event = new Events({
      banner: req.body.banner,
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      location: req.body.location,
      runtime: req.body.runtime,
      ageRating: req.body.ageRating,
      language: req.body.language,
      image: req.body.image,
      tickets: req.body.tickets,
      genre: req.body.genre,
      organizer: organizer,
      registrations: req.body.registrations,
      artist: req.body.artist,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
    console.log(event)
    const org = await Organizer.findById(organizer);
    console.log(org);
    // event.organizer = org;
    await event.save();
    org.events.push(event);
    await org.save();
    res.status(200).json("Event Added Succesfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

const deleteEvent = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Events.findById(id);
    const org = event.organizer;
    const o = await Organizer.findById(org);
    o.events.pull(event);
    await o.save();
    const e = await Events.findOneAndDelete({ _id: id });
    if (e == null) {
      res.status(200).json("No such document present");
    } else {
      res.status(200).json("deleted Succesfully");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

const updateEvent = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const e = await Events.findByIdAndUpdate(id, changes);
    if (e == null) {
      res.status(200).json("No such document present");
    } else {
      res.status(200).json("Updated Succesfully");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

const registrationDetails = asyncHandler(async (req, res) => {
  const eventId = req.params.id;
  const userId = req.body.userId;
  const registrationDetails = req.body.registrationDetails;

  try {
    const event = await Events.findById(eventId);
    console.log("here");
    for (let i = 0; i < registrationDetails.tickets.length; i++) {
      if(event.tickets.availableTickets<registrationDetails.tickets.ticketsBought){
        res.status(400).json("Tickets not available");
        return;
      }
      event.tickets.availableTickets -=registrationDetails.tickets.ticketsBought;
    }
    const user = await User.findById(userId);
    // for(let j=0;j<event.registrations.length;j++){
    //     if(event.registrations[j]._id==userId){
    //         res.status(400).json("User already registered");
    //         return;
    //     }
    // }
    event.registrations.push(user);
    await event.save();
    user.priceList.push({eventId:event,list:registrationDetails.tickets});
    await user.save();
    res.status(200).json("Registration Succesfull");
    return;
  } catch (error) {
    res.status(400).json(error);
    return;
  }
});



export {
  getEvents,
  getEvent,
  setEvent,
  deleteEvent,
  updateEvent,
  registrationDetails,
};
