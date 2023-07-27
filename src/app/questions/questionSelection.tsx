"use client"

import QuestionType from "./questionType"
import { ChangeEvent, useState } from "react"
import questionTypes from "./questionTypes.json"
import styles from "./page.module.css"

export default function QuestionSelection(){
    let [questionSettings, setQuestionSettings] = useState<string[]>([]);
    const updateSettings = (event : ChangeEvent<HTMLInputElement>): void => {
        const givenOption = event.target;
        if(questionSettings.includes(givenOption.id) && givenOption.checked === false){
            setQuestionSettings(prev => prev.filter(option => option !== givenOption.id))
        } else{
            setQuestionSettings(prev => [...prev, givenOption.id]);
        }
        console.log(questionSettings);
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
            <button className={styles.button}>Generate</button>
        </div>
    )
}