import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ width: "38%", color: "green" }}>
        <h1 style={{fontSize:"25px", fontWeight: "600"}}>Github Finder</h1>
      </div>
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
