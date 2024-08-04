import React from 'react'
import logo from "../../public/images2/Fill 213.png";

const Navbar = () => {
  return (
    <nav className='navbar'>     
        <img src={logo} alt="Air Bub logo" />
        <h2>my travel journal.</h2>          
    </nav>
  )
}

export default Navbar
