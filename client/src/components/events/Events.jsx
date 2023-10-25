import React, { useRef, useState } from "react";
import HorizontalScrollable from "./horizontalScrollable/HorizontalScrollable";
import EventCarousel from "./EventCarousel";
import EventsGallery from "./EventsGallery";

const Events = () => {
  return (
    <React.Fragment>
      {/* <HorizontalScrollable /> */}
        <EventCarousel />
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
        <EventsGallery />
    </React.Fragment>
  );
};

export default Events;
