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

const setEvent = asyncHandler(async(req,res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;
    const rating = req.body.rating;
    const tags = req.body.tags;
    try {
        const event = new Events({title:title,description:description,image:image,price:price,rating:rating,tags:tags})
        await event.save()
        res.status(200).json('Event Added Succesfully')
    } catch (error) {
        res.status(400).json(error)
    }
})

const deleteEvent = asyncHandler(async(req,res)=>{
    try {
        const id = req.params.id;
        await Events.findOneAndDelete({'_id':id})
        res.status(200).json('deleted Succesfully')
    } catch (error) {
        res.status(400).json(error)
    }
})

const updateEvent = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const changes = req.body
    try{
        await Events.findByIdAndUpdate(id,changes)
        res.status(200).json('Updated Succesfully')
    } catch(error){
        res.status(400).json(error)
    }
})

export { getEvents, getEvent, setEvent, deleteEvent, updateEvent };

