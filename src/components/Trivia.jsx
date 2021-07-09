import React, { useEffect, useState } from 'react'
import "../app.css"

const Trivia = ({
    data, 
    setTimeOut, 
    questionNumber, 
    setQuestionNumber,
}) => {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    },[data, questionNumber])

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map(arr => (
                    <div className="answer">{arr.text}</div>
                ))}
            </div>
        </div>
    )
}

export default Trivia
