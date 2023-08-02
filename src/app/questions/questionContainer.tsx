import Questions from "./questions"
import styles from "./page.module.css"

interface props{
    questions : object[]
}

export default function QuestionContainer({questions} : props){
    return(
        <div className={styles.question_container}>
            {
                questions.map((newQuestion : any, i) => {
                    return (
                        <Questions questionNumber={i + 1} givenQuestion={newQuestion.question} answer={newQuestion.answer} />
                    )
                })
            }
        </div>
    )
}