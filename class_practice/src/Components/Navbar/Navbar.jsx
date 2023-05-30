import "../Navbar/Navbar.css"


const Navbar = () =>{
    return (
        <div className="navbar">
              <div className="logo">
                    <h1>Geekster</h1>
              </div>
              <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                    <li>Help</li>
                </ul>
              </div>
        </div>
    )
}

    export default Navbar;