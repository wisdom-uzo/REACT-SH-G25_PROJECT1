import React from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose} from 'react-icons/gr'

import "./Navbar.css";

const Navbar = () => {

  const [showNav, setShowNav] = React.useState(false)
  return (
  <>  
    <nav className="navbar">
      <div className="navbar_left">
        <h1>
          <Link to="/"  style={{ textDecoration: "none", color: "#d1411e" }}>fill_UP</Link>
        </h1>
      </div>

      <div className="navbar_center">
        <ul className="navbar_list-items">
          <li className="navbar_list-item">
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>

          <li className="navbar_list-item">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>

          <li className="navbar_list-item">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              Menu
            </Link>
          </li>

          <li className="navbar_list-item">
            <Link
              to="contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className=" signbtn navbar_right">
        <button>sign in</button>
      </div>

      <button 
        onClick={() => setShowNav(true)} 
        className="hamburgerBtn"><GiHamburgerMenu /></button>


    </nav>

    {showNav && (
      <div className="showNav">

      <button 
      onClick={() => setShowNav(false)} 
      className="GrFormClose"><GrFormClose /></button>

          <ul className="">
          <li className="">
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>

          <li className="">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>

          <li className="">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              Menu
            </Link>
          </li>

          <li className="">
            <Link
              to="contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar_right">
        <button>sign in</button>
      </div>

      </div>
    )}
    </> 
  );
};

export default Navbar;
