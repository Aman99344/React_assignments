import {useState} from 'react'

const Counter = () => {

    let[state, setState] = useState(0)
     
  return (
    <div>
        <h2>{state}</h2>
        <button onClick={()=>setState(state + 1)}>Inc Counter</button>
        <button onClick={()=>setState(state - 1)}>Dec Counter</button>
        <button onClick={()=>setState(0)}>Reset</button>

    </div>
  )
}

export default Counter;