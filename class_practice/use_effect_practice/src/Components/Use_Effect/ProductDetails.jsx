
const ProductDetails =({userdata}) =>{
    return(
        <div>
            <table cellSpacing="80px" style={{margin: "10px auto"}}>
                <thead>
                    <tr>
                           <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                        </thead>

                        {
                            userdata.map((ele,i)=> {
                                return <tr style={{textAlign: "center",}}>
                                        <td><img src={ele.image} alt=""  height= "150px" width= "150px"/></td>
                                        <td>{ele.title}</td>
                                        <td>{ele.price}</td>
                                        <td>{ele.category}</td>
                                    </tr>
                                
                            })
                        }
                    
                
            </table>
        </div>
    )
}

export default ProductDetails;