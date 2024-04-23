import styles from "./footer.module.css";

export default function Footer({ completedTasks, numberTasks }) {
    return (
        <footer className={styles.footer}>
            <h2>Completed tasks: {completedTasks}</h2>
            <h2>Total tasks: {numberTasks}</h2>
        </footer>
    );
}
