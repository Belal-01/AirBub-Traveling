import React from 'react'
import logo from "../../public/images/Vector.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <img src={logo} alt="Air Bub logo" />
      </div>     
    </nav>
  )
}

export default Navbar
