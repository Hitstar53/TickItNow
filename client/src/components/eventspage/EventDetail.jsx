import React from 'react';
import styles from './EventDetail.module.css';
import EventDemo from '../../assets/images/events-demo.jpg';

const EventDetail = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.downDiv}>
                <div className={styles.eventImage}>
                    <img src={EventDemo} className={styles.image} />
                </div>
                <div className={styles.otherDetails}>
                    <div className={styles.texts}>
                        <div className={styles.eventName}>Kisi Ko Batana Mat Ft. Anubhav Singh Bassi</div>
                        <div className={styles.eventBasicDetails}>Comedy | Hindi | 16yrs + | 1hr 30mins</div>
                    </div>
                    <div className={styles.bookBtn}>Book</div>
                </div>
                <div className={styles.otherDetails2}>
                    <div className={styles.genreAgeDetils}>Comedy, Satire&ensp;|&ensp;Hindi&ensp;|&ensp;18yrs +&ensp;|&ensp;1hr 40mins</div>
                    <div className={styles.priceDetails}>799/- onwards</div>
                </div>
                <div className={styles.dateLocation}>
                    <div className={styles.date}>Fri 29 Sept 2023  -  Sat 30 Sept 2023</div>
                    <div className={styles.location}>Shanmukhnand Hall: Mumbai</div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;