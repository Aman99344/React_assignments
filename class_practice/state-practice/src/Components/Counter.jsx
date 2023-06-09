import { useState } from "react";


function Counter(){

    let [state, setState] = useState(0)

    let counterStyle = {
        width: "300px",
        boxShadow: "0 0 10px black",
        padding: "30px",
        textAlign: "center",
        margin: "100px auto"
    }
   //  var countValue = 0

    // function increaseCount(){
    //     console.log("Before " + countValue )
    //     countValue = countValue + 1;
    //     console.log("After " + countValue )
    // }

    function increaseCount(){  
       setState(state + 1) 
    }

     return <div style={counterStyle}>
        <h2>Counter Value is {state}</h2>
        <button onClick={increaseCount}>Inc Count</button>
     </div>
}

export default Counter;
