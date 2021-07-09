import React, { useEffect, useState } from 'react'
// import useSound from 'use-sound';
// import play from "../sounds/play.mp3"
// import correct from "../sounds/correct.mp3"
// import wrong from "../sounds/wrong.mp3"



const Trivia = ({
    data, 
    setStop, 
    questionNumber, 
    setQuestionNumber,
}) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');

    useEffect(() => {
        console.log('useEffect on mount')
        setQuestion(data[questionNumber - 1])
    },[data, questionNumber])

    const delay = (duration, callback) => {
        setTimeout(()=>{
            callback()
        }, duration)
    }

    const handleClick = (arr) => {
        setSelectedAnswer(arr);
        setClassName('answer active')
        delay(1000, () => setClassName(arr.correct ? "answer correct" : "answer incorrect") 
        )
        delay(6000, () => {
            if(arr.correct) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null)
            } else {
                setStop(true);
            }
        })

    }

    return (
        <div className="trivia">

            <div className="question">{question?.question}</div>

            <div className="answers">
                {question?.answers.map(arr => (
                    <div 
                    className={selectedAnswer === arr ? className : "answer"} 
                    onClick={() => handleClick(arr)}
                    key={arr.id}
                    >{arr.text}</div>
                ))}
            </div>

        </div>
    )
}

export default Trivia
