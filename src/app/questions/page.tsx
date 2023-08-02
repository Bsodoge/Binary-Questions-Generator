"use client"

import { useState } from "react"
import QuestionSelection from "./questionSelection"
import QuestionContainer from "./questionContainer"
import styles from "./page.module.css"

export default function Questions() {
    let [questions, setQuestions] = useState<object[]>([]);
    let [generated, setGenerated] = useState<boolean>(false);
    const generateQuestions = async (questionSettings : string[]) : Promise<void> => {
        if(!questionSettings.length) return;
        setQuestions([]);
        for (let i = 0; i < 10; i++) {
            console.log(questionSettings);
            const questionType = questionSettings[Math.floor(Math.random() * questionSettings.length)];
            switch (questionType) {
                case "binaryDecimal":
                    const binaryDecimal = await import("./calculations/binaryDecimal");
                    setQuestions(prev => [...prev, binaryDecimal.default()]);
                    break;
                case "binaryHex":
                    const binaryHex = await import("./calculations/binaryHex");
                    setQuestions(prev => [...prev, binaryHex.default()]);
                    break;
                case "binaryAddition":
                    const binaryAddition = await import("./calculations/binaryAddition");
                    setQuestions(prev => [...prev, binaryAddition.default()]);
                    break;
                case "binarySubtraction":
                    const binarySubtraction = await import("./calculations/binarySubtraction");
                    setQuestions(prev => [...prev, binarySubtraction.default()]);
                    break;   
                case "binaryMultiplication":
                    const binaryMultiplication = await import("./calculations/binaryMultiplication");
                    setQuestions(prev => [...prev, binaryMultiplication.default()]);
                    break;    
                case "binaryTwosCompliment":
                    const binaryTwosCompliment = await import("./calculations/binaryTwosCompliment");
                    setQuestions(prev => [...prev, binaryTwosCompliment.default()]);
                    break;  
                case "binaryFractions":
                    const binaryFractions = await import("./calculations/binaryFractions");
                    setQuestions(prev => [...prev, binaryFractions.default()]);
                    break;  
                case "binaryMantissaExponent":
                    const binaryMantissaExponent = await import("./calculations/binaryMantissaExponent");
                    setQuestions(prev => [...prev, binaryMantissaExponent.default()]);
                    break;                
            }
        }   
        setGenerated(true);
    }
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Choose your questions</h1>
            {
                generated ? <></>  : <h2>Select some options then press the generate button</h2>
            }
            <QuestionSelection generateQuestions={generateQuestions}/>
            {
                generated ? <QuestionContainer questions={questions}/>  : <></>
            }
        </main>
    )
}