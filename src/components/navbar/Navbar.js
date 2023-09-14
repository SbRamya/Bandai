import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Greatersign from "../../Assert/Greatersign.svg";
import Location from "../../Assert/Location.svg";
import Signin from "../../Assert/Signin.svg";
import Search from "../../Assert/Search.svg";
import Cart from "../../Assert/Cart.svg";
import Menubar from "../../Assert/Menubar.svg";
import MenuCancel from "../../Assert/MenuCancel.svg";
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
                <hr class="solid"></hr>
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
                  <hr class="solid"></hr>
                  
                  <li>
                    <img className="icon" src={Signin} alt=""></img>
                    <NavLink to="/Sign">Sign In</NavLink>
                  </li>
                  <li>
                    <img className="icon" src={Location} alt=""></img>
                    <NavLink to="/Search">Store Search</NavLink>
                  </li>
                  <hr class="solid"></hr>
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

        <div className="item1">
          <img alt="logo" src={logo} />
        </div>
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
