import styles from "./EventManager.module.css";

export default function Card(props) {
    return (
        <div className={styles.parentDiv}>
            <div className={styles.cardDiv}>
                <div className={styles.cardDiv2}>
                    <img src={props.link} className={styles.cardimg} />
                    <div className={styles.cardtitle}>{props.title}</div>
                </div>
                <div>
                    <div className={styles.artist}>- {props.artist}</div>
                </div>
            </div>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.removeBtn}>Remove</button>
        </div>
    )
}