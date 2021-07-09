import { useEffect, useState } from "react"

export default function Timer({setStop, questionNumber}) {
    const [timer, setTimer] = useState(45);

    useEffect(() => {
        if(timer === 0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer(time => time - 1)
        },1000);

        return () => clearInterval(interval);
    },[setStop, timer]);

    useEffect(()=>{
        setTimer(45)
    },[questionNumber])

    return timer
}
