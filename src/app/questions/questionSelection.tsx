"use client"

import QuestionType from "./questionType"
import { ChangeEvent, useState } from "react"
import questionTypes from "./questionTypes.json"
import styles from "./page.module.css"

interface props {
    generateQuestions : Function
}

export default function QuestionSelection({generateQuestions} : props){
    let [questionSettings, setQuestionSettings] = useState<string[]>([]);
    const updateSettings = (event : ChangeEvent<HTMLInputElement>): void => {
        const givenOption = event.target;
        if(questionSettings.includes(givenOption.id) && givenOption.checked === false){
            setQuestionSettings((prev : string[]) => prev.filter((option : string) => option !== givenOption.id))
        } else{
            setQuestionSettings((prev : string[]) => [...prev, givenOption.id]);
        }
    }
    return(
        <div className={styles.question_selection_container}>
            {
                questionTypes.map(question => {
                    return(
                        <QuestionType updateSettings={updateSettings} questionID={question.questionID} questionName={question.questionName} key={question.id}/>
                    )
                })
            }
            <button className={styles.button} onClick={() => generateQuestions(questionSettings)}>Generate</button>

        </div>
    )
}