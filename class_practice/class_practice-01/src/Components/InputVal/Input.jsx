 import {useState} from 'react'
 
 const Input = () => {
    const [state, setState] = useState("")
    const [value, setValue] = useState([])

    const inputVal = () => {
      setValue([...state, value])
  }

   return (
     <div>
        <input value={state} onChange={(e)=>{setState(e.target.value)}} type="text" />
        <button onClick={inputVal}>Submit</button>
        <p>{value}</p>

     </div>
   )
 }
 
 export default Input; 
