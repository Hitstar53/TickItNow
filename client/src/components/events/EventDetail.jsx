import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData, json } from "react-router-dom";
import styles from "./EventDetail.module.css";
import EventDemo from "../../assets/images/events-demo.jpg";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { Avatar } from "@mui/material";
import ServerUrl from "../../constants";

const EventDetail = () => {
  const data = useLoaderData();
  console.log(data.eventsData);
  const { name } = useParams();
  const [event, setEvent] = useState(data.eventsData);
    return (
      <div className={styles.mainDiv}>
        <div>
          <img src={event.image} alt="event" className={styles.eventImage} />
        </div>
        <div className={styles.otherDetails}>
          <div className={styles.texts}>
            <div className={styles.eventName}>
              {event.title}
            </div>
            <div className={styles.eventBasicDetails}>
              Comedy | Hindi | 16yrs + | 1hr 30mins
            </div>
          </div>
          <button className={styles.bookBtn}>Book</button>
        </div>
        <div className={styles.otherDetails2}>
          <div className={styles.priceDetails}>{event.price[0]}/- onwards</div>
        </div>
        <div className={styles.dateLocation}>
          <div className={styles.date}>
            <AiOutlineCalendar
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                margin: "5px",
              }}
            />
            Fri 29 Sept 2023 - Sat 30 Sept 2023
          </div>
          <div className={styles.location}>
            <BiLocationPlus
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                margin: "5px",
              }}
            />
            Shanmukhnand Hall: Mumbai
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
          <div className={styles.map}>
            Map
          </div>
        </div>
      </div>
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