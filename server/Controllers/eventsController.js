import Events from "../Models/eventsModel.js";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

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

const setEvent = asyncHandler(async(req,res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;
    const rating = req.body.rating;
    const tags = req.body.tags;
    const organizer = req.body.organizer;
    const registrations = req.body.registrations;
    const genre = req.body.genre;
    const language = req.body.language;
    const ageRating = req.body.ageRating;
    const runtime = req.body.runtime;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const location = req.body.location;
    const banner = req.body.banner;
    try {
        const event = new Events({banner:banner,title:title,description:description,startDate:startDate,endDate:endDate,location:location,runtime:runtime,ageRating:ageRating,language:language,image:image,price:price,rating:rating,tags:tags,genre:genre,organizer:organizer,registrations:registrations})
        await event.save()
        res.status(200).json('Event Added Succesfully')
    } catch (error) {
        res.status(400).json(error)
    }
})

const deleteEvent = asyncHandler(async(req,res)=>{
    try {
        const id = req.params.id;
        const e = await Events.findOneAndDelete({'_id':id})
        if(e==null){
            res.status(200).json('No such document present')
        }else{
            res.status(200).json('deleted Succesfully')
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

const updateEvent = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const changes = req.body
    try{
        const e = await Events.findByIdAndUpdate(id,changes)
        if(e==null){
            res.status(200).json('No such document present')
        }else{
            res.status(200).json('Updated Succesfully')
        }
    } catch(error){
        res.status(400).json(error)
    }
})

const registerationDetails = asyncHandler(async(req,res)=>{
    const eventId = req.params.id
    const userId = req.body.userId
    const ticketDetails = req.body
    //userId 
    // price: {
    //     type: Array,
    //     required: true,
    //     availableTickets:{
    //       type:Number,
    //       required: true
    //     }
    //   },
    try{   
        const user = await User.findById(userId);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        const event = await Event.findById(eventId);
        if (!event) {
        return res.status(404).json({ message: 'Event not found' });
        }
        const existingEventIndex = user.events.findIndex((event) => event._id.equals(eventId))
        if (existingEventIndex !== -1) {
            return res.status(400).json({ message: 'User already registered for this event' });
        }
        // Add user id to registrations field of events database
        event.registrations.push(userId);
        await event.save();

        // Add event and price details to user database
        user.events.push({
            event: eventId,
            price: ticketDetails.price
        });
        await user.save();

        // Update the prices of that particular event in the event Model
        const newPriceDetails = event.price.map((priceDetail) => {
            if (priceDetail._id.equals(ticketDetails.price._id)) {
                return {
                    ...priceDetail,
                    availableTickets: priceDetail.availableTickets - ticketDetails.quantity
                };
            }
            return priceDetail;
        });
        event.price = newPriceDetails;
        await event.save();

        res.status(200).json("Registration Successful")
    }catch(error){
        res.status(400).json(error)
    }
})
        
        //await Events.findByIdAndUpdate(id,{registrations:ticketDetails}) //add user id to registrations field of events database
        //await User.findByIdAndUpdate(id,{ticketDetails}) //add event and price details to user database
        res.status(200).json("Registration Successful")
    }catch(error){
        res.status(400).json(error)
    }
})

const priceDetails = asyncHandler(async(req,res)=>{
    const id = req.params.id
    try{
        const event = await Events.findById(id)
        res.status(200).json(event.price)
    }catch(error){
        res.status(400).json(error)
    }
})

export { getEvents, getEvent, setEvent, deleteEvent, updateEvent, registerationDetails,priceDetails };

