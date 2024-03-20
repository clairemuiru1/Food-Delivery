import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"

function NavBar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' className='logo'/>
      <ul className="navbar-menu">
        <li>Home </li>
        <li>Menu </li>
        <li>Mobile-app</li>
        <li>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={search_icon} alt=''/>
        <div className="navbar-serch-icon">
            <img src={basket_icon} alt=''/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
