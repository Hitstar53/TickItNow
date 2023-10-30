import Events from "../Models/eventsModel.js";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import Organizer from "../Models/organizerModel.js";

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
    const tickets = req.body.tickets;
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
        const event = new Events({banner:banner,title:title,description:description,startDate:startDate,endDate:endDate,location:location,runtime:runtime,ageRating:ageRating,language:language,image:image,tickets:tickets,rating:rating,tags:tags,genre:genre,organizer:organizer,registrations:registrations})
        event.organizer = await Organizer.findById(organizer);
        await event.save()
        Organizer.events.push(event)
        res.status(200).json('Event Added Succesfully')
    } catch (error) {
        res.status(400).json(error)
    }
})

const deleteEvent = asyncHandler(async(req,res)=>{
    try {
        const id = req.params.id;
        const e = await Events.findOneAndDelete({'_id':id})
        Organizer.events.pull(e)
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
    const registerationDetails = req.body.registerationDetails

    try{
        const event = await Events.findById(eventId)
        for(let i=0;i<registerationDetails.tickets.length;i++){
            event.tickets[i].availableTickets-=registerationDetails.tickets[i].ticketsBought
        }
        const user = await User.findById(userId);
        event.registrations.push(user)
        await event.save()
        User.events.push(event)
        res.status(200).json("Registration Succesfull")
    }catch(error){
        res.status(400).json(error)
    }
})



export { getEvents, getEvent, setEvent, deleteEvent, updateEvent, registerationDetails};

