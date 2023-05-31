
import React from 'react'
import axios from 'axios'

const Product = () => {

    const getData =  () => {
     axios.get("https://fakestoreapi.com/products").then((res)=>{
        console.log(res.data)
      })
    }

  return (
    <div>
        <h1>Product details</h1>
        <button onClick={getData}>Submit</button>
    </div>
  )
}

export default Product