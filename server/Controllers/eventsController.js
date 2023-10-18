import Events from "../Models/eventsModel.js";
import mongoose from "mongoose";


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

export { getEvents, getEvent };
