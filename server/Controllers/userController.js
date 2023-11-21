import User from "../Models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Events from "../Models/eventsModel.js";


const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    const u = await User.findOne({ email: user.email });
    if (u!=null) {
        res.status(400).json({message: "User already exists"});
        return;
    }
    const newUser = new User(user, bcrypt.hash(user.password, 12));
    try {
      await newUser.save();
      const token = jwt.sign({ email: user.email, id: user._id }, "test", {
        expiresIn: "1h",
      });
      console.log(token)
      res.status(201).json({ result: newUser, token });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User doesn't exist" });
            return;
        }
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const token = jwt.sign({ email: user.email, id: user._id }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No user with that id" });
    }
    const updatedUser = await User.findByIdAndUpdate(id, { ...user, id }, { new: true });
    res.status(200).json(updatedUser);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No user with that id" });
    }
    await User.findByIdAndRemove(id);
    res.status(200).json({ message: "User deleted successfully" });
}

const getCalendarEvents = async (req, res) => {
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const userId = req.params.id
    try {
        const user = await User.findById(userId)
        const events = []
        for(let k=0;k<user.priceList.length;k++){
            const event = await Events.findById(user.priceList[k].eventId)
            events.push(event)
        }
        
        console.log(events)
        const calendarEvents = events.filter((event) => {
            let eventStartDate = new Date(event.startDate);
            let eventEndDate = new Date(event.endDate);
            console.log(eventStartDate,eventEndDate,startDate,endDate,event.startDate,event.endDate)
            return (eventStartDate <= endDate && eventEndDate >= startDate) || (eventEndDate >= startDate && eventStartDate <= endDate) ||(eventStartDate >= startDate && eventEndDate <= endDate)
        })
        res.status(200).json(calendarEvents)
    } catch (error) {
        res.status(400).json(error)
    }
  };

export { getUsers, createUser, loginUser, getUser, updateUser, deleteUser, getCalendarEvents};

