import styles from "./EventManager.module.css";
import Card from "./Card.jsx";

export default function EventManager() {
    return (
        <div>
            <div className={styles.titlebar}>
                <h1>Event Manager</h1>
                <button>Statistics</button>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.card}>
                <Card
                    title="Hello World"
                    link="https://source.unsplash.com/random/600x400"
                    artist="John Doe"
                />
                <Card
                    title="Hello World"
                    link="https://source.unsplash.com/random/600x400"
                    artist="John Doe"
                />
                <Card
                    title="Hello World"
                    link="https://source.unsplash.com/random/600x400"
                    artist="John Doe"
                />
                <Card
                    title="Hello World"
                    link="https://source.unsplash.com/random/600x400"
                    artist="John Doe"
                />
                <Card
                    title="Hello World"
                    link="https://source.unsplash.com/random/600x400"
                    artist="John Doe"
                />
            </div>
        </div>
    )
}