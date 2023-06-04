import "../Navbar/Navbar.css"

const Navbar =() =>{
    return (
        <div className='navbar'>

        <div className='title'>
            <h2>Flex Business Pro</h2>
            <p>Clean and Modern Business Theme</p>
        </div>
        <div className='nav-items'>
            <a className="blue" href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Styleguide</a>
            <a href="/">Blog</a>
            <a href="/">Contact Us</a>
        </div>

     </div>
    )
}

export default Navbar;