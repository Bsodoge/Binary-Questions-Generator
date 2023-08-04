"use client"

import styles from "./page.module.css"

interface props {
    questionName : string,
    questionID : string,
    updateSettings : Function
}

export default function QuestionType ({questionName, updateSettings, questionID} : props){
    return (
        <div className={styles.question_types}>
            <label htmlFor="">{questionName}</label>
            <input type="checkbox" name="" id={questionID} onChange={(e) => updateSettings(e)}/>
        </div>
    )
}