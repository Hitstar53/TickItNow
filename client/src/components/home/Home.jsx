import React from 'react'
import { Button } from '@mui/material'
import styles from './Home.module.css'
import eventImage from '../../assets/images/event.png'
import amazon from '../../assets/images/amazon-logo.svg'
import cisco from '../../assets/images/cisco-logo.svg'
import microsoft from '../../assets/images/microsoft-logo.svg'
import paypal from '../../assets/images/paypal-logo.svg'
import uber from '../../assets/images/uber-logo.svg'
import cocacola from '../../assets/images/coca-cola-logo.svg'

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
          <Button variant="contained" className={styles.button}>
            Get Started
          </Button>
        </div>
        <div className={styles.col2}>
          <img src={eventImage} alt="events" className={styles.eventImage} />
        </div>
      </div>
      <div className={styles.sponsors}>
        <h1 className="flex flex-col text-4xl font-black items-center">
          Our Sponsors
          <span className={styles.bottomLine} style={{ width: '7%', marginTop: '1rem' }}></span>
        </h1>
        <div className="flex justify-around items-center my-4">
          <img 
            src={amazon} 
            alt="amazon" 
            className={styles.sponsorImage}
          />
          <img
            src={cisco}
            alt="cisco"
            className={styles.sponsorImage}
          />
          <img
            src={microsoft}
            alt="microsoft"
            className={styles.sponsorImage}
          />
          <img
            src={paypal}
            alt="paypal"
            className={styles.sponsorImage}
          />
          <img
            src={uber}
            alt="uber"
            className={styles.sponsorImage}
          />
          <img
            src={cocacola}
            alt="cocacola"
            className={styles.sponsorImage}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home