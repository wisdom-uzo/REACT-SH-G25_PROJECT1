import React from "react";
import "./Home.css";
import HomeImg from "../../assets/Resturant_landing.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const exploreMenu = (e) => {
    e.preventDefault();

    navigate("/products");
  };

  return (
 
      <section className="sec">
          <div className="home_left">
            <h1>The Healthy Food for Wealthy Mood</h1>
            <p>
              We believe in the commitment to our community and in fostering long
              term relationships with local farmers and fishermen. Our menus reflect
              these connections, featuring local, seasonal produce and sustainably
              sourced seafood and meats
            </p>

            <button className="home_button" onClick={exploreMenu}>
              Explore Menu
            </button>
          </div>
          
          <div className="home_right">
            <img src={HomeImg} alt="home-img" />
          </div>
      </section>
  
  );
};

export default Home;
