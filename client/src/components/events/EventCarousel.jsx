import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Events.module.css";

const EventCarousel = (props) => {
  const [events, setEvents] = useState(props.events);
  return (
    <div
      style={{
        width: "95%",
        margin: "0 auto",
        marginTop: "3rem",
      }}
    >
      <Swiper
        slidesPerView={3}
        effect={"coverflow"}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className={styles.swiper}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "3rem",
          "--swiper-navigation-sides-offset": "0",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {/* {events.map((event) => (
          <SwiperSlide className={styles.swiperSlide}>
            <img src={event.image} alt="event" />
          </SwiperSlide>
        ))} */}
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://source.unsplash.com/random/600x400" alt="event" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://source.unsplash.com/random/600x400" alt="event" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://source.unsplash.com/random/600x400" alt="event" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://source.unsplash.com/random/600x400" alt="event" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://source.unsplash.com/random/600x400" alt="event" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default EventCarousel