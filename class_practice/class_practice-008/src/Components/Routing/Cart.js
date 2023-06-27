import { useState, useEffect } from 'react'
import axios from 'axios'

const Cart = () => {

  const [cartdata, setCartData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5009/cart")
      .then((res) => {
        setCartData(res.data)
        console.log(res.data)
      })
  }, [])

  const removeItems =(id)=>{
    console.log(id)
     axios.delete(`http://localhost:5009/cart/${id}`).then((res)=>{
       
     })

    const filterCart = cartdata.filter((ele)=>{
      return ele.id !== id

    })

    setCartData(filterCart)
    console.log(filterCart)

  }


  return (
    <div>
      <h2>Products added to cart</h2>
      {
        cartdata.map((cart) => {
          return <div style={{padding: "10px", width: "80%", margin: "20px auto", boxShadow: "0 0 5px black",display: "flex" }}>
            <div style={{width: "30%"}}>
              <img src={cart.image} alt="" height={200} width={200} />
            </div>

            <div style={{width:"70%", textAlign: "center"}}>
              <h2>{cart.name}</h2>
              <p>{cart.description}</p>
              <h3>&#x20B9; {cart.price}</h3>
              <button onClick={()=>{removeItems(cart.id)}}>Remove</button>
            </div>
            
          </div>

        })
      }
    </div>
  )
}

export default Cart