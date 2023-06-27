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

    const server =(cart)=>{
      return axios.post("http://localhost:5009/cart", cart).then(()=>{
        
      })
    }
    
    const addtoCart =(item) =>{
      let cart = {
        name:  item.title,
        image: item.image,
        price: item.price,
        description: item.description
      }

      server(cart)
    }

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            data.map((item)=>{
                return <div style={{boxShadow: "0 0 2px blue",height:"340px", width: "360px", margin: "80px auto", padding: "10px"}}>
                    <img src={item.image} alt="" height="150px" width="150px" />
                    <h3>{item.title}</h3>
                    <h4>&#x20B9; {Math.round(item.price)}</h4>
                    <button onClick={()=>{addtoCart(item)}}>Add to Cart</button>

                </div>
            })
        }
    </div>
  )
}

export default Product;