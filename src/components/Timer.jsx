import { useEffect, useState } from "react"

export default function Timer({setStop, questionNumber}) {
    //Set initial timer to '45'
    const [timer, setTimer] = useState(45);

    //if timer = 0, end game. 
    useEffect(() => {
        if(timer === 0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer(time => time - 1)
        },1000);

        return () => clearInterval(interval);
    },[setStop, timer]);

    // Reset timer when question number changes
    useEffect(()=>{
        setTimer(45)
    },[questionNumber])

    return timer
}
