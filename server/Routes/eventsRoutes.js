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
router.put("/:id/setEvent", setEvent);
router.delete("/deleteEvent/:id", deleteEvent);
router.patch("/updateEvent/:id", updateEvent);
router.post("/:id/registrationDetails", registrationDetails);
export default router;
