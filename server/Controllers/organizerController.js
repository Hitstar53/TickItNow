import Organizer from "../Models/organizerModel.js";
import Event from "../Models/eventsModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const getOrganizers = async (req, res) => {
    try {
        const organizers = await Organizer.find();
        res.status(200).json(organizers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createOrganizer = async (req, res) => {
    const organizer = req.body;
    const u = await Organizer.findOne({ email: organizer.email });
    if (u) {
        res.status(400).json({ message: "Organizer already exists" });
    }
    const newUser = new Organizer(organizer, bcrypt.hash(organizer.password, 12));
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const loginOrganizer = async (req, res) => {
    const { email, password } = req.body;

    try {
        const organizer = await Organizer.findOne({ email });
        if (!organizer) {
            res.status(404).json({ message: "Organizer doesn't exist" });
        }
        const isPasswordCorrect = bcrypt.compare(password, organizer.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ email: organizer.email, id: organizer._id }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: organizer, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const getOrganizer = async (req, res) => {
    const { id } = req.params;
    try {
        const organizer = await Organizer.findById(id);
        res.status(200).json(organizer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateOrganizer = async (req, res) => {
    const { id } = req.params;
    const organizer = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No organizer with that id" });
    }
    const updatedUser = await Organizer.findByIdAndUpdate(id, { ...organizer, id }, { new: true });
    res.status(200).json(updatedUser);
}

const deleteOrganizer = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No organizer with that id" });
    }
    await Organizer.findByIdAndRemove(id);
    res.status(200).json({ message: "Organizer deleted successfully" });
}

const getEventsByOrganizerId = async (req, res) => {
    const { id } = req.params;
    try {
        const events = await Event.find({ organizer: id });
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { getOrganizers, createOrganizer, loginOrganizer, getOrganizer, updateOrganizer, deleteOrganizer, getEventsByOrganizerId };


