import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"

function NavBar() {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=> setMenu("home")} className={menu ==="home"? "active": ""}>Home </li>
        <li onClick={()=> setMenu("menu")}  className={menu ==="menu"? "active": ""}>Menu </li>
        <li onClick={()=> setMenu("mobile-app")}  className={menu ==="mobile-app"? "active": ""}>Mobile-app</li>
        <li onClick={()=> setMenu("contact-us")}  className={menu ==="contact-us"? "active": ""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={search_icon} alt=''/>
        <div className="navbar-search-icon">
            <img src={basket_icon} alt=''/>
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
