import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>


    
 {/* header section */}
<header>
  <a href="#home"><img src="assets/images/logo.png" alt="image" width={200} /></a>
  <nav className="navbar">
    <ul>
      <li><Link to="/home">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/shop">shop</Link></li>
      <li><Link to="/menu">menu</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/post">New Item</Link></li>
    </ul>
  </nav>
  <div className="icon">
    <i className="bx bxl-facebook" />
    <i className="bx bxl-twitter" />
    <i className="bx bxl-instagram-alt" />
    <i className="bx bxl-whatsapp" />
    <i className="bx bxl-youtube" />
  </div>
  <div className="bx bx-menu" />
</header>
{/* header section */}


    
    </>
  )
}

export default Navbar