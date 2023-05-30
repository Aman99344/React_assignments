import "../Navbar/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>LOGO</h2>
        </div>
        <div className='nav-Items'>
            <a className="home" href="/">HOME</a>
            <a href="/">ABOUT</a>
            <a href="/">MENU</a>
            <a href="/">ORDER</a>
            <a href="/">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar;