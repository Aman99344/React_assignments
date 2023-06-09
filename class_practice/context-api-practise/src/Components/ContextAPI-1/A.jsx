import { useState } from "react";
import myContext from "./Context";
import B from "./B";

const A = () => {
  const [data, setData] = useState("Aman");
  return (
    <div>
      <h2>A Components</h2>
      <button onClick={()=>{setData("Priya")}  }>Send Data to D </button>
      <myContext.Provider value = {data}>
       <B />
      </myContext.Provider>
    </div>
  );
};

export default A;
