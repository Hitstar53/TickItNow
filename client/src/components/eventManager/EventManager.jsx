import React, { useState } from "react";
import { useLoaderData, json } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MultiFieldModal from "../UI/Modals/MultiFieldModal";
import styles from "./EventManager.module.css";
import Card from "./Card.jsx";
import ServerUrl from "../../constants";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = () => {
      reject(error);
    };
  });
}

export default function EventManager() {
    const data = useLoaderData();
    console.log(data.eventData);
    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpenDialog = () => {
      setOpenDialog(true);
    };
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
    const [newData, setNewData] = useState({});
    const organizerId = JSON.parse(localStorage.getItem("user"))._id;
    const handleDataChange = (e) => {
      setNewData({ ...newData, [e.target.name]: e.target.value });
    };
    const handleDataSubmit = async (e) => {
      e.preventDefault();
      const file = e.target.image.files[0]
      const base64 = await convertToBase64(file);
      setNewData(
        (prev) => ({ ...prev, image: base64 })
      )
      const banner = e.target.banner.files[0]
      const bannerBase64 = await convertToBase64(banner);
      setNewData(
        (prev) => ({ ...prev, banner: bannerBase64 })
      );
      const addEvent = async () => {
        const response = await fetch(`${ServerUrl}/api/events/${organizerId}/setEvent`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newData.title,
            description: newData.description,
            image: base64,
            banner: bannerBase64,
            tickets: { price: newData.ticket, availableTickets: '5000' },
            genre: newData.genre,
            language: newData.language,
            ageRating: newData.agerating,
            runtime: newData.runtime,
            startDate: newData.startdate,
            endDate: newData.enddate,
            artist: newData.artist,
            latitude: newData.loccords.split(",")[0],
            longitude: newData.loccords.split(",")[1],
            location: newData.location,
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
      addEvent();
    };
    const handleDelete = async (id) => {
      console.log(id);
      const deleteEvent = async () => {
        const response = await fetch(`${ServerUrl}/api/events/deleteEvent/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          console.log("Something went wrong, please try again later");
        }
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          window.location.reload();
        }
      };
      deleteEvent();
    }
    return (
      <div className="mb-10">
        <div className={styles.titlebar}>
          <h1>Event Manager</h1>
          <button onClick={handleClickOpenDialog}>Add Event</button>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.card}>
          {data.eventData.map((event) => (
            <Card
              key={event._id}
              id={event._id}
              title={event.title}
              link={event.image}
              artist={event.artist}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <MultiFieldModal
          handleDataSubmit={handleDataSubmit}
          openDialog={openDialog}
          handleClickOpenDialog={handleClickOpenDialog}
          handleCloseDialog={handleCloseDialog}
          title="Create A New Event"
          content="Please fill in the details below to create a new event"
        >
          <TextField
            required
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter your event title"
            onChange={handleDataChange}
          />
          <TextField
            multiline
            required
            autoFocus
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter your event description"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="image"
            label="Image Link"
            type="file"
            fullWidth
            variant="standard"
            helperText="Enter your event image"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="banner"
            label="Banner Link"
            type="file"
            fullWidth
            variant="standard"
            helperText="Enter your event banner link"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="ticket"
            label="Ticket Price"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter your event ticket price"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="genre"
            label="Genre"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter your event genre"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="language"
            label="Language"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the language of your event"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="agerating"
            label="Age Rating"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the age rating of your event"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="runtime"
            label="Runtime"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the runtime of your event"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="startdate"
            label="Start Date"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the start date of your event"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="enddate"
            label="End Date"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the end date of your event"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="artist"
            label="Artists"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the artists of your event, separated by a comma. Eg: John Doe,Jane Doe"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the location of your event"
            onChange={handleDataChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="loccords"
            label="Location Coordinates"
            type="text"
            fullWidth
            variant="standard"
            helperText="Enter the latitude & longitude of your event, separated by a comma. Eg: 1.3521, 103.8198"
            onChange={handleDataChange}
          />
        </MultiFieldModal>
      </div>
    );
}

export async function loader() {
  const organizerId = JSON.parse(localStorage.getItem("user"))._id;
  // console.log(organizerId);
  const response = await fetch(`${ServerUrl}/api/organizer/events/${organizerId}`, {
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
    const eventData = await response.json();
    return { eventData };
  }
}