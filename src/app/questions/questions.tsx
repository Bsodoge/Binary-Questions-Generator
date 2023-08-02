"use client"

import { useRef, useState } from "react"
import styles from "./page.module.css"


interface props {
    questionNumber : number,
    givenQuestion : string,
    answer : string
}

export default function Questions({questionNumber, givenQuestion, answer} : props){
    let userInput = useRef<HTMLInputElement | null>(null);
    let [correct, setCorrect] = useState<boolean>(false);
    let [reveal, setReveal] = useState<boolean>(false);
    const checkAnswer = (userAnswer : string) => {
        if(userAnswer == answer){
            console.log("correct");
            setCorrect(true);
        } else{
            setCorrect(false)
        }
    }
    return(
        <div className={styles.question}>
            <div className={styles.question_number}>
                <p>{questionNumber}</p>
                <p>{givenQuestion}</p>
            </div>
            <div className={styles.input_answer}>
                <button onClick={() => setReveal(rev => !rev)}>Reveal answer</button>
                <div className={styles.input_container}>
                    {
                        reveal ? <p className={styles.answer}>The answer is {answer}</p> : <div></div>
                    }
                   <input type="text" name="" id="" style={correct ? {backgroundColor: "green"} : {}} onChange={() => checkAnswer(userInput.current!.value)} ref={userInput}/>
                </div>
            </div>
        </div>
    )
}