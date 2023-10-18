import Events from "../Models/eventsModel.js";
import mongoose from "mongoose";

//Muffi nigg you could've created methods for create, update and delete events here. 😅 Mene getEvents ka method function organizer me bana diya hai
const getEvents = async (req, res) => {
    try {
        const events = Events.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = Events.findById(id);
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

<<<<<<< HEAD
export { getEvents, getEvent };
=======

export { getEvents };
>>>>>>> 847b8dba896405f0e32e7269a414b94b6c3eba08

