import React from "react";
import "./Home.css";
import HomeImg from "../../assets/Resturant_landing.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home_left">
        <h1>The Healthy Food for Wealthy Mood</h1>
        <p>
          We believe in the commitment to our community and in fostering long
          term relationships with local farmers and fishermen. Our menus reflect
          these connections, featuring local, seasonal produce and sustainably
          sourced seafood and meats
        </p>
      </div>
      <div className="home_right">
        <img src={HomeImg} alt="home-img" />
      </div>
    </section>
  );
};

export default Home;
