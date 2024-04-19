import React, { useRef, useState } from "react";
import { useLoaderData, json } from "react-router-dom";
import EventCarousel from "./EventCarousel";
import EventsGallery from "./EventsGallery";
import ServerUrl from "../../constants";

const Events = () => {
  const data = useLoaderData();
  return (
    <React.Fragment>
      {/* <HorizontalScrollable /> */}
        <EventCarousel events={data.eventsData} />
        <h1 className="flex flex-col text-4xl font-black items-center my-20">
            Trending Events
            <span
            style={{
                width: "7%",
                marginTop: "1rem",
                borderBottom: "5px solid #f1356d",
            }}
            />
        </h1>
        <EventsGallery events={data.eventsData} />
    </React.Fragment>
  );
};

export default Events;

export async function loader() {
  const response = await fetch(
    `${ServerUrl}/api/events`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
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