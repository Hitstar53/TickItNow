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
import MultiFieldModal from "../UI/Modals/MultiFieldModal"
import styles from "./EventDetail.module.css";
import ServerUrl from "../../constants";

const EventDetail = () => {
  const data = useLoaderData();
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
    const updateProjects = async () => {
      const response = await fetch(`${ServerUrl}/api/student/setProjects`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: JSON.parse(localStorage.getItem("userinfo")).email,
          name: arr[0].name,
          duration: arr[0].duration,
          domain: arr[0].domain,
          techStack: arr[0].techStack,
          team: arr[0].team,
          description: arr[0].description,
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
    updateProjects();
  };
  return (
    <React.Fragment>
      <div className={styles.mainDiv}>
        <div>
          <img src={event.image} alt="event" className={styles.eventImage} />
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
                {event.price[0]}/- onwards
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
            Artist
            <br />
            <div className="flex items-center gap-10">
              <Avatar sx={{ width: 200, height: 200 }} />
              Anubhav Singh Bassi
            </div>
          </div>
          <div className={styles.map}>Map</div>
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
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          helperText="Enter your name"
          onChange={handleDataChange}
        />
        <TextField
          select
          required
          margin="dense"
          variant="standard"
          fullWidth
          name="year"
          label="Year"
          helperText="Select your year"
          placeholder="Select your year"
          onChange={handleDataChange}
          sx={{ mt: "1rem" }}
        >
          <MenuItem value="Winner">Winner</MenuItem>
          <MenuItem value="2nd Place">First Runner Up</MenuItem>
          <MenuItem value="3rd Place">Second Runner Up</MenuItem>
          <MenuItem value="participation">Participation</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </TextField>
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