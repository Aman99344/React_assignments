import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
const navigate =  useNavigate()
const {id} = useParams()

  return (
    <div>
        <h2>Product Details</h2>
         <p>{id}</p>
        
        <button onClick={()=>{navigate("/product")}}>Go Back to Product Components</button>

        {/* <Link to="/product">
        <button>Go Back to Product Components</button>
        </Link> */}
    </div>
  )
}

export default ProductDetails;