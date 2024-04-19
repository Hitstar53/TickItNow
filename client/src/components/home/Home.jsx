import React from 'react'
import { Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import styles from './Home.module.css'
import eventImage from '../../assets/images/event.png'
import aboutus from '../../assets/images/aboutus.jpg'
import amazon from '../../assets/images/amazon-logo.svg'
import cisco from '../../assets/images/cisco-logo.svg'
import microsoft from '../../assets/images/microsoft-logo.svg'
import paypal from '../../assets/images/paypal-logo.svg'
import uber from '../../assets/images/uber-logo.svg'
import cocacola from '../../assets/images/coca-cola-logo.svg'
import event1 from '../../assets/images/event1.png'
import event2 from '../../assets/images/event2.png'
import event3 from '../../assets/images/event3.png'
import event4 from '../../assets/images/event4.png'
import event5 from '../../assets/images/event5.png'
import event6 from '../../assets/images/event6.png'

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.hero}>
        <div className="col1">
          <h1 className="flex flex-col text-4xl w-1/2 font-black static">
            Elevate Your Events with Us
            <span className={styles.bottomLine}></span>
          </h1>
          <p className="text-base my-4 opacity-75 w-3/4">
            Welcome to the premier event management company that turns your
            dreams into unforgettable experiences. At TickItNow, we specialize
            in crafting exceptional events tailored to your unique vision and
            preferences.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f1356d",
              color: "white",
              border: "none",
              padding: "0.75rem 1.25rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              "&:hover": {
                backgroundColor: "#f1356d",
                opacity: "0.8",
              },
            }}
          >
            Get Started
            <ArrowRightAltIcon />
          </Button>
        </div>
        <div className={styles.col2}>
          <img src={eventImage} alt="events" className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.sponsors}>
        <h1 className="flex flex-col text-4xl font-black items-center">
          Our Sponsors
          <span
            className={styles.bottomLine}
            style={{ width: "7%", marginTop: "1rem" }}
          ></span>
        </h1>
        <div className="flex justify-between items-center m-4">
          <img src={amazon} alt="amazon" className={styles.sponsorImage} />
          <img src={cisco} alt="cisco" className={styles.sponsorImage} />
          <img
            src={microsoft}
            alt="microsoft"
            className={styles.sponsorImage}
          />
          <img src={paypal} alt="paypal" className={styles.sponsorImage} />
          <img src={uber} alt="uber" className={styles.sponsorImage} />
          <img src={cocacola} alt="cocacola" className={styles.sponsorImage} />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.col2}>
          <img src={aboutus} alt="events" className={styles.heroImage} />
        </div>
        <div className={styles.col1}>
          <h1 className="flex flex-col text-4xl w-2/3 font-black static">
            About Us
            <span className={styles.bottomLine}></span>
          </h1>
          <p className="text-base my-4 opacity-75">
            At TickItNow, we specialize in creating memorable events. With years
            of experience, our dedicated team is committed to turning your
            vision into reality. From weddings to corporate gatherings, we bring
            creativity and attention to detail to every occasion. Let us make
            your next event extraordinary.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f1356d",
              color: "white",
              border: "none",
              padding: "0.75rem 1.25rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              "&:hover": {
                backgroundColor: "#f1356d",
                opacity: "0.8",
              },
            }}
          >
            Read More
            <ArrowRightAltIcon />
          </Button>
        </div>
      </div>
      <div className={styles.trending}>
        <h1 className="flex flex-col text-4xl font-black items-center">
          Trending Events
          <span
            className={styles.bottomLine}
            style={{ width: "7%", marginTop: "1rem" }}
          ></span>
        </h1>
        <div className={styles.eventsgrid}>
          <div className={styles.img1}>
            <img src={event1} alt="event1" className={styles.eventImage} />
          </div>
          <div className={styles.img2}>
            <img src={event2} alt="event2" className={styles.eventImage} />
          </div>
          <div className={styles.img3}>
            <img src={event3} alt="event3" className={styles.eventImage} />
          </div>
          <div className={styles.img4}>
            <img src={event4} alt="event4" className={styles.eventImage} />
          </div>
          <div className={styles.img5}>
            <img src={event5} alt="event5" className={styles.eventImage} />
          </div>
          <div className={styles.img6}>
            <img src={event6} alt="event6" className={styles.eventImage} />
          </div>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h1 className="flex flex-col text-4xl font-black items-center">
          Subscribe to Our Newsletter
          <span
            className={styles.bottomLine}
            style={{ width: "7%", marginTop: "1rem" }}
          ></span>
        </h1>
        <div className={styles.subcard}>
          <p className="text-2xl font-bold m-4">
            Subscribe to our newsletter and stay updated with the latest trends
            and events!
          </p>
          <div className={styles.subform}>
            <input
              type="email"
              placeholder="Enter your email"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "0.75rem 1.25rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home