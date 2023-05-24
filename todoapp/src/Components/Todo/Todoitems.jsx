
const TodoItems = ({todoitems, deleteItems, haddleToggle}) =>{
    return (
        <div>
            {todoitems.map((items,index)=>{
                return (
                    <div style={{width: "35%",display:"flex",justifyContent:"space-between", alignItems:"center", margin: "auto"}}>
                        <h4>{items.title}</h4>
                        <h4 style={{color: "orange"}}>{items.status ? "Completed" : "Not Completed"}</h4>
                        <button onClick={()=>{haddleToggle(index)}}>Toggle</button>
                        <button onClick={()=>{deleteItems(index)}}>Delete</button>

                    </div>
                )

                    })} 
        </div>
    )
}

export default TodoItems;