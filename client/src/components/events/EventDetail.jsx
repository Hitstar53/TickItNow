import React from "react";
import styles from "./EventDetail.module.css";
import EventDemo from "../../assets/images/events-demo.jpg";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

const EventDetail = () => {
    return (
        <div className={styles.mainDiv}>
            <div>
                <img src={EventDemo} alt="event" className={styles.eventImage} />
            </div>
            <div className={styles.otherDetails}>
                <div className={styles.texts}>
                    <div className={styles.eventName}>
                        Kisi Ko Batana Mat Ft. Anubhav Singh Bassi
                    </div>
                    <div className={styles.eventBasicDetails}>
                        Comedy | Hindi | 16yrs + | 1hr 30mins
                    </div>
                </div>
                <button className={styles.bookBtn}>Book</button>
            </div>
            <div className={styles.otherDetails2}>
                <div className={styles.genreAgeDetils}>
                    Comedy, Satire&ensp;|&ensp;Hindi&ensp;|&ensp;18yrs +&ensp;|&ensp;1hr
                    40mins
                </div>
                <div className={styles.priceDetails}>799/- onwards</div>
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
                <span className={styles.aboutEventHeading}>
                    About the Event
                </span>
                <br />
                After the great success of his previous show "Bas kar bassi," Anubhav
                Singh Bassi is coming back to perform live on stage. This time, he will
                bring a whole new set of funny stories and jokes that will keep you
                entertained. Get ready to enjoy an exciting and hilarious performance
                that will make you laugh uncontrollably and leave you in high spirits
            </div>
            <div className={styles.artistMap}>
                <div className={styles.artist}>
                    Artist<br />
                    Anubhav Singh Bassi
                </div>
                <div className={styles.map}>Map</div>
            </div>
        </div>
    );
};

export default EventDetail;
