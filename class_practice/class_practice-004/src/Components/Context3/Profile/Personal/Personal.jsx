import {useEffect, useState} from 'react'
import Bachaelors from '../Educational/Education/Bachaelors'
import axios from 'axios'
import myThirdContext from '../Context3'

const Personal = () => {

    useEffect(()=>{
    axios.get("http://localhost:5008/results")
    .then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  
    },[])

    const[data, setData] = useState([])

  return (
    <div>
      <h2>Personal Components</h2>
      
      <myThirdContext.Provider value={data}>
          <Bachaelors />
      </myThirdContext.Provider>
      
    </div>
  )
}

export default Personal;