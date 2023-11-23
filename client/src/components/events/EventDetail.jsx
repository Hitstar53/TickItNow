import React, { useState } from "react";
import { useLoaderData, json } from "react-router-dom";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MultiFieldModal from "../UI/Modals/MultiFieldModal"
import styles from "./EventDetail.module.css";
import ServerUrl from "../../constants";

const EventDetail = () => {
  const data = useLoaderData();
  console.log(data.eventsData)
  const [event, setEvent] = useState(data.eventsData);
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const [newData, setNewData] = useState({});
  const handleDataChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  const handleDataSubmit = async (e) => {
    e.preventDefault();
    console.log(event._id)
    console.log(newData);
    const makeRegistration = async () => {
      const response = await fetch(`${ServerUrl}/api/user/makePayment1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: JSON.parse(localStorage.getItem("user"))._id,
          event_id: event._id,
          numberOfTickets: newData.tickets,
        }),
      });
      if (!response.ok) {
        console.log("Something went wrong, please try again later");
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    };
    makeRegistration();
  };
  return (
    <React.Fragment>
      <div className={styles.mainDiv}>
        <div>
          <img src={event.banner} alt="event" className={styles.eventImage} />
        </div>
        <div className={styles.otherDetails}>
          <div className={styles.eventName}>{event.title}</div>
          <div className={styles.eventBasicDetails}>
            {event.genre} | {event.language} | {event.rating} | {event.runtime}
          </div>
          <div className={styles.eventBook}>
            <div className={styles.eventBookLeft}>
              <button
                className={styles.bookBtn}
                onClick={handleClickOpenDialog}
              >
                Book Now
              </button>
              <div className={styles.priceDetails}>
                ₹{event.tickets.price} /- onwards
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dateLocation}>
          <div className={styles.date}>
            <AiOutlineCalendar
              style={{
                fontSize: "2rem",
              }}
            />
            {event.startDate} - {event.endDate}
          </div>
          <div className={styles.location}>
            <BiLocationPlus
              style={{
                fontSize: "2rem",
              }}
            />
            {event.location}
          </div>
        </div>
        <div className={styles.aboutEvent}>
          <span className={styles.aboutEventHeading}>About the Event</span>
          <br />
          {event.description}
        </div>
        <div className={styles.artistMap}>
          <div className={styles.artist}>
            <span className={styles.artistHeading}>Artists</span>
            <div className="flex items-center gap-5 mt-3">
              {
                event.artist.split(",").map((artist) => (
                  <div className={styles.artistName}>{artist}</div>
                ))
              }
            </div>
          </div>
          <div className={styles.map}>
            <span className={styles.artistHeading}>Map</span>
          </div>
        </div>
      </div>
      <MultiFieldModal
        handleDataSubmit={handleDataSubmit}
        openDialog={openDialog}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
        title="Event Registration"
        content={`Event: ${event.title}`}
      >
        <TextField
          required
          autoFocus
          margin="dense"
          name="tickets"
          label="Number of Tickets"
          type="text"
          fullWidth
          variant="standard"
          helperText={`Available Tickets: ${event.tickets.availableTickets}`}
          onChange={handleDataChange}
        />
      </MultiFieldModal>
    </React.Fragment>
  );
};

export default EventDetail;

export async function loader({ params }) {
  const response = await fetch(`${ServerUrl}/api/events/${params.name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch events information" },
      { status: 422 }
    );
  }
  if (response.ok) {
    const eventsData = await response.json();
    return { eventsData };
  }
}