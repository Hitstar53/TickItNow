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
        priceList: [{
            eventId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
            },
            list: [{
                price: {
                    type: Number,
                    required: true
                },
                ticketsBought: {
                    type: Number,
                    required: true
                }
            }],
        }],
        orders: [{
            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            },
            quantity: {
                type: Number,
                required: true
            },
            totalPrice: {
                type: Number,
                required: true
            }
        }]
    })

    const User = mongoose.model('User', userSchema)

    export default User
