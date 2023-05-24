import Todoitems from "../Todo/Todoitems"
import { useState } from "react";

const AddTodo = () => {
    let[state, setState] =  useState("");
    let[todoItems, setTodoItems] = useState([])


  var newItems = {
    title: state,
    status: true
  }



    const addtodoItems = () =>{
      
      return state === "" ? alert('Please Enter Some Text') : setTodoItems([...todoItems, newItems])
      

    }



    const deleteItems = (index) =>{
      var filterData = todoItems.filter((item, i)=>{
        return index !== i
      })

      setTodoItems(filterData)
    }

    const haddleToggle = (index) => {
      var newArray = todoItems.map((item,i)=>{
        return index === i ? {...item, status: !item.status } : item
      })
      setTodoItems(newArray)
    }

    

    return ( <div style={{margin: "100px auto", textAlign: "center"}}>
    <h2>TODO APP</h2>
    <input value={state} placeholder="Enter some Text" type="text" onChange={(e)=>{setState(e.target.value)}} />
    <button onClick={addtodoItems}>Submit</button>
    <Todoitems todoitems={todoItems} deleteItems={deleteItems} haddleToggle={haddleToggle}/>
    </div>
    )
}

export default AddTodo;

