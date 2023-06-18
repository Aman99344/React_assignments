import {useEffect, useState} from 'react'
import axios from 'axios'

const Product = () => {

    const[data, setData] = useState([])

    useEffect(()=>{
          axios.get("http://localhost:5009/data").then((res)=>{
            setData(res.data)
            console.log(res.data)
          })
    },[])


  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            data.map((e, )=>{
                return <div style={{height:"450px", width: "350px", margin: "80px auto"}}>
                    <img src={e.image} alt="" height="150px" width="150px" />
                    <p>{e.description}</p>
                    <h4>{e.price}</h4>
                    <button>Add to Cart</button>

                </div>
            })
        }
    </div>
  )
}

export default Product;