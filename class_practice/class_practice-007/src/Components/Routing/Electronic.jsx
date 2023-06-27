import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Electronic = () => {

  const[electronicdata, setElectronicData] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
        .then((res)=>{
         setElectronicData(res.data)
        })
    },[])


  return (
    <div>
        <h2>Electronic Product</h2>
        <ul type="none">
          {
            electronicdata.map((data)=>{
              return (
                <Link to={`/productdetails/${data.id}`}><li style={{marginTop: "25px"}}>{data.title}</li></Link>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Electronic;