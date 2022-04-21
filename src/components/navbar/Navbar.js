import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>fill_UP</h1>
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
      <div className="navbar_right">
        <button>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
