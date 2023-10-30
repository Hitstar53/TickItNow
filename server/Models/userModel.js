import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    role: {
        type: String,
        default: "attendee"
    },
    username: {
        type:String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        unique: true
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    }]
})

const User = mongoose.model('User', userSchema)

export default User