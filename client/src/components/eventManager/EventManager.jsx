import styles from "./EventManager.module.css";
import Card from "./Card.jsx";

export default function EventManager() {
    return (
        <div>
            <div className={styles.titlebar}>
                <h1>Event Manager</h1>
                <button>Statistics</button>
            </div>
            <div>
                <Card title="HelloWorld" />
            </div>
        </div>
    )
}