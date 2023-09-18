import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Greatersign from "../../Asset/Greatersign.svg";
import Location from "../../Asset/Location.svg";
import Signin from "../../Asset/Signin.svg";
import Search from "../../Asset/Search.svg";
import Cart from "../../Asset/Cart.svg";
import Menubar from "../../Asset/Menubar.svg";
import MenuCancel from "../../Asset/MenuCancel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [CartCounter, setCartCounter] = useState(0);
  const addCount = () => {
    setCartCounter(CartCounter + 1);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <div className={`nav-elements ${showNavbar && "active"}`}>
              <img className="logo" src={logo} alt="logo" />
              <img className="icon" src={MenuCancel} alt="" />
                <ul>
                <hr className="solid"></hr>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/Toys">Toys</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/Collectibles">Collectibles</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/Shops">Shops</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/News">Latest News</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/About">About Us</NavLink>
                  </li>
                  <hr className="solid"></hr>
                  
                  <li>
                    <img className="icon" src={Signin} alt=""></img>
                    <NavLink to="/Sign">Sign In</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Location} alt=""></img>
                    <NavLink to="/Search">Store Search</NavLink>
                  </li>
                  <hr className="solid"></hr>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/Service">Customer Service</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Greatersign} alt=""></img>
                    <NavLink to="/Privacy">Privacy & Security</NavLink>
                  </li>
                  <li>        <div className="footer">    
         <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
         <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
         <a href="https://www.pinterest.com/"><FontAwesomeIcon icon={faPinterest} /></a>
         <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
         <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
       </div></li>
                </ul>
            </div>
          ) : (
            <img className="icon" src={Menubar} alt="" />
          )}
        </div>
        <Link to={"/"}>
        <div className="item1">
          <img alt="logo" src={logo} />
        </div>
        </Link>
        <Link>
          <img className="icon" src={Search} alt=""></img>
        </Link>
        <div>
          <Link onClick={addCount}>
            <img className="icon" src={Cart} alt=""></img>
            <span className="Cartcounter">{CartCounter}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
