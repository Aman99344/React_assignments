import { useState, useEffect } from "react";

const User = () =>{

let [state, setState] = useState([])

useEffect(()=>{
    getData()
},[])


const getData = async () => {
 
    var res = await fetch("https://jsonplaceholder.typicode.com/users")
    var data = await res.json()
        setState(data)
   }
   

    return (
        <div style={{textAlign: "center"}}>
            <h2>user</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi iste est, deserunt, fuga et dolorem voluptas dolorum ratione voluptatibus id assumenda blanditiis magni sed quisquam? Et quasi vel aliquam! Iusto rem nulla consequuntur dolorem, voluptates dolorum omnis illo eveniet. Fuga quae veniam, ullam dolorum et magni alias impedit incidunt eos temporibus, laudantium aspernatur? Temporibus doloremque aspernatur, unde ullam, autem rerum fuga tempora corporis numquam esse magni dolores. Natus sequi asperiores iure, reiciendis incidunt ab non, omnis nemo ad ipsam assumenda est iusto! Vel quis eligendi, nam adipisci distinctio soluta architecto expedita voluptates suscipit, quisquam quas dolore enim animi eum!</p>
            <button onClick={()=>{getData()}}>Get User</button>
            {
                state.length > 0 ? <ol>
                    {
                        state.map((ele, i)=> {
                            return <li key = {i}>{ele.name}</li>
                        })
                    }
                </ol> : <h2 style={{color:"red"}}>No user</h2>
            }
        </div>
    )
}

export default User;