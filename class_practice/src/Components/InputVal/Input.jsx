import {useState} from 'react'

const Input = () => {
    let[state, setState] = useState("");
    let[input, setInput] = useState()

    const inputval = ()=> {
      setInput(state)
    }

  return (
    <div>
        <input value={state} onChange={((e)=>setState((e.target.value)))} type="text" />
        <button onClick={inputval}>Submit</button>
        <p>{input}</p>
    </div>
  )
}

export default Input;
