// import { useContext } from "react";
// import mySecondContext from "./context";

// function D (props){
//     let data = useContext(mySecondContext)
//     return(
//         <div>
//  <h2>D Component</h2>
//       <p style={{color:"red"}}>{data}</p>
//         </div>
//     );
// }

// export default D;

import { useContext, useState } from "react";
import mySecondContext from "./context";

function D(props) {
  const { setState } = useContext(mySecondContext);
  const [dvalue, setDvale] = useState();
  return (
    <div>
      <h2>D Component</h2>
      <input
        onChange={(e) => {
          setDvale(e.target.value);
        }}
        type="text"
      />
      &nbsp;
      <button
        onClick={() => {
          setState(dvalue);
        }}
      >
        send Data to Parents
      </button>
    </div>
  );
}

export default D;
