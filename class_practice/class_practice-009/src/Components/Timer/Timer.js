import { useState } from 'react'

const Timer = () => {
    const [state, setState] = useState(0)
    const [timerid, setTimerId] = useState(null)
    // let timer;
    const startTimer = () => {
        setTimerId(
            setInterval(() => {
                setState((prevState) => prevState + 1)
            }, 1000)

        )
        // setTimerId(timer)
    }

    const stopTimer = () => {
        clearInterval(timerid)
    }

    return (
        <div style={{ width: "320px", height: "180px", boxShadow: "0 0 10px blue", margin: "100px auto", padding: "40px" }}>
            <h2>Timer : {state}</h2>
            <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={stopTimer}>Stop</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={(()=>{setState(0)})}>Reset</button>
        </div>
    )
}

export default Timer