import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"
import {Link} from 'react-router-dom'
function NavBar({setShowLogin}) {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <Link to="/"><img src={logo} alt='Logo' className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=> setMenu("home")} className={menu ==="home"? "active": ""}>Home </Link>
        <a href='#explore' onClick={()=> setMenu("menu")}  className={menu ==="menu"? "active": ""}>Menu </a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")}  className={menu ==="mobile-app"? "active": ""}>Mobile-app</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")}  className={menu ==="contact-us"? "active": ""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={search_icon} alt=''/>
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={basket_icon} alt=''/></Link>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
