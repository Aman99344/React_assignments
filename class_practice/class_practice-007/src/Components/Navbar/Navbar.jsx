import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {


  return (
    <div className="navbar">
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

      </div>
    </div>
  )
}

export default Navbar;
