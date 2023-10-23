import Events from "../Models/eventsModel.js";
import asyncHandler from "express-async-handler";

const getEvents = asyncHandler(async (req, res) => {
    try {
        const events = await Events.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

const getEvent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Events.findById(id);
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

export { getEvents, getEvent };

