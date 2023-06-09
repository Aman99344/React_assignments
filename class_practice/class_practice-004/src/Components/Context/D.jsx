import React from 'react'
import { useContext } from 'react';
import myContext from './Context';



const D = () => {

  let myData = useContext(myContext)

  return (
    <div>
      <h2>D Components</h2>
      <p style={{color: "red", fontSize: "22px", fontWeight: "bolder"}}>{myData}</p>
    </div>
   
  )
}

export default D;