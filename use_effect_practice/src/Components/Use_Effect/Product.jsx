import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";
const Product =() =>{
    let [state, setState] = useState([]);

    useEffect(()=>{
        getproduct()
    },[])

    const getproduct = () =>{
        
            <div>
                {
                    fetch("https://fakestoreapi.com/products")
                    .then((res) => res.json())
                    .then((data) => {
                       setState(data)
                    })
                    
                }
            </div>
        
      }

      const removeproduct = () =>{
        return setState([])
      }

  
    return (
        <div style={{padding: "20px"}}>
            <h1>Product info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam tempora doloribus nulla. Asperiores, dolore nulla inventore soluta quisquam saepe rem sit quas. Officia molestiae sed mollitia voluptate quae voluptas officiis numquam, quasi minus culpa unde est quo voluptatibus odit nemo iste nostrum similique deserunt ab tenetur quam illum. Voluptate accusamus repudiandae, corrupti tenetur blanditiis illum sapiente esse maxime dolor illo ea vero voluptatem animi voluptas velit, enim exercitationem quis mollitia eveniet veritatis, minus neque. Eaque dignissimos reprehenderit voluptates cum esse, dolores accusantium expedita cumque illum commodi quidem. Natus cum earum totam sequi, quibusdam maiores odit officiis aperiam corrupti ex deleniti est nihil porro illum odio repudiandae exercitationem quas aliquam ipsum, laboriosam repellendus quia. Hic a veniam atque accusamus eos esse molestiae voluptatem architecto. Nam non eum error sapiente beatae neque et, eos eius laudantium modi nostrum! Vero necessitatibus ipsum ex id ullam molestias nesciunt voluptatem, reiciendis, voluptas, asperiores esse. Modi minus, nesciunt laborum, placeat nisi molestias, vitae voluptatibus neque blanditiis veritatis corrupti consectetur veniam hic dignissimos ipsa. Ipsam soluta exercitationem, qui quae voluptate ratione itaque corporis vel dolores consectetur odit aspernatur, nostrum fuga odio, totam nihil debitis numquam ipsum omnis id minus non at natus! Consectetur, fugit odio vitae facilis ab, doloribus, delectus voluptate voluptatem impedit sapiente officiis? Dolorum consequuntur ea corrupti non in, voluptatum adipisci vel harum quasi totam est consectetur et, rem iusto voluptas, perspiciatis expedita magni amet sunt reprehenderit quo! Rem ipsum provident reiciendis dolorem, quidem enim magnam vero cum facilis, repellendus in dolores debitis doloribus.</p>
            <button onClick={()=>{getproduct()}}>Get Product</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{removeproduct()}}>Remove Product</button>
            <ProductDetails userdata ={state} />
        </div>
    )
}

export default Product;