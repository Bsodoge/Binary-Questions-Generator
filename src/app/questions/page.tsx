import QuestionSelection from "./questionSelection"
import styles from "./page.module.css"

export default function Questions() {
    return (
        <main className={styles.main}>
            <h1>Choose your questions</h1>
            <QuestionSelection />
        </main>
    )
}