import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav'> 
        <div id='title'>
            <h2>React Context</h2>
        </div>

        <div id='menu'>
            <a href="">Home</a>
            <a href="">Profile</a>
            <a href="">Product</a>
            <a href="">Support</a>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Nav