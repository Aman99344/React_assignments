import { useState,useEffect } from "react";

const Counter = () => {

    const[state, setState] = useState(0);

    useEffect(()=>{
        document.title = state
    },)
 
    //  document.title = `${state}`

    return (
        <div style={{textAlign: "center"}}>
            <h2>Count Value is {state} </h2>
            <button onClick={()=>{setState(state + 1)}}>Increase Counter</button>
        </div>
    )
}

export default Counter;