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



export { getEvents };

