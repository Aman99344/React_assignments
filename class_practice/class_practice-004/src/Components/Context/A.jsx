import B from "./B";
import myContext from "./Context";
import { useState } from "react";

const A = () => {
  const [data, setData] = useState("Geeks")
  return (
    <div>
      <h2>A Components</h2>
      <button onClick={()=>{setData("Geekster")}}>Send Data</button>
      <hr />
      <myContext.Provider value={data}>
      <B  />
      </myContext.Provider>
      
    </div>
  
  )
}

export default A;