import D from "./D";
import { useContext } from "react";
import myContext from "./Context";

const C = () => {

  let data = useContext(myContext)

  return (
    <div>
      <h2>C Components <span style={{color: "green"}}>{data}</span></h2>
      <hr />

      <D  />
    </div>
   
  )
}

export default C;