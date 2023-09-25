import User from "../Models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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
    const u = User.findOne({ email: user.email });
    if (u) {
        res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User(user, bcrypt.hash(user.password, 12));
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User doesn't exist" });
        }
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid credentials" });
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
        const user = User.findById(id);
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
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No user with that id" });
    }
    await User.findByIdAndRemove(id);
    res.status(200).json({ message: "User deleted successfully" });
}


export { getUsers, createUser, loginUser, getUser, updateUser, deleteUser };

