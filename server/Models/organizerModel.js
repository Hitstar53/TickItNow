const mongoose = require('mongoose');

//Organizer schema contains name, email, password, and one-many relationship with events
const organizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
});

const Organizer = mongoose.model('Organizer', organizerSchema);

export default Organizer
