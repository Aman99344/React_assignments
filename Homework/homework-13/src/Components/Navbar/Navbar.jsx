import "../Navbar/Navbar.css"

const Navbar =() =>{
  return (
    <div className="navbar">
        <div style={{width: "40%", color: "#a9b9bd"}}><h1 style={{fontSize: "21px"}}>E-commerce</h1></div>
         <div className="nav-items">
            <a href="/">Home</a>
            <a href="/">Product</a>
            <a href="/">Users</a>
            <a href="/">Contact</a>
         </div>
    </div>
  )
}

export default Navbar;
