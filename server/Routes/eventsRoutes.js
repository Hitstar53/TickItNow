import express from "express";
import {
  getEvents,
  getEvent,
  setEvent,
  deleteEvent,
  updateEvent,
  registrationDetails,
} from "../Controllers/eventsController.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEvent);
router.put("/setEvent/:id", setEvent);
router.delete("/deleteEvent/:id", deleteEvent);
router.patch("/updateEvent/:id", updateEvent);
router.post("/registrationDetails/:id", registrationDetails);
export default router;
