import { useEffect } from "react";
import { useState } from "react";
import getTimeRemaining from "../lib/dateUtils";

function useCountdown(targetDate) {
    const [time, setTime] = useState(getTimeRemaining(targetDate));
    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setTime(getTimeRemaining(targetDate))
        }, 1000)

        return ()=> {
            clearInterval(intervalId)
        }
    }, [targetDate]);
    return time;
}



export default useCountdown;