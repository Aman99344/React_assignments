import React from 'react'
import { useContext } from 'react';
import myContext from './Context';

const D = () => {
    const contextData =useContext(myContext)
  return (
    <div>
        <h2>D Components</h2>
        <p style={{color: "red"}}>A Component Data: {contextData}</p>
    </div>
  )
}

export default D;