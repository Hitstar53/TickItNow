import mongoose from "mongoose";

//User schema contains username, email, password
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const User = mongoose.model('User', userSchema)

export default User