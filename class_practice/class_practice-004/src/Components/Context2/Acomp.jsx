import Bcomp from "./Bcomp"
import mySecContext from "./Contex2"
import { useState } from "react"

const Acomp = () => {

    const [state, setState] = useState("")
    const[inputval, setInputVal] = useState("")

    const getData =()=>{
        setInputVal(state)
    }

    return (
        <div>
            <input onChange={(e)=>{ setState(e.target.value) }} type="text" />
            <button onClick={getData}>Send Data</button>
            <mySecContext.Provider value={inputval}>
                <Bcomp />
            </mySecContext.Provider>

        </div>
    )
}

export default Acomp