import "../Navbar/Navbar.css"
import { useContext } from "react"
import AuthContext from "../ContextProvider/Context"

const Navbar =() =>{

  const {isLoggedIn , logout} = useContext(AuthContext)
  return (
    <div className="navbar">
         <div className="nav-items">
            <a href="/">Home</a>
            <a href="/">Product</a>
            <a href="/">Users</a>
            <a href="/">Contact</a>
            {
              isLoggedIn ? <button onClick={()=>{logout()}}>Logout</button> : null
            }
         </div>
    </div>
  )
}

export default Navbar;
