import React from "react";
import "./Home.css";
import HomeImg from "../../assets/Resturant_landing.png";
import { useNavigate } from "react-router-dom";
import bread from '../../assets/bread.jpg'
import beef from '../../assets/beef.jpg'
import meat from '../../assets/meet.jpg'
const Home = () => {
  const navigate = useNavigate();

  const exploreMenu = (e) => {
    e.preventDefault();

    navigate("/products");
  };


  const top = [
    {
      name:'BREAD FRUIT CHEESE SANDWICH',
      dis:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.',
      img: bread
    },
    {
      name:'BEEF CUTLET WITH SPRING ONION',
      dis:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.',
      img:beef
    },
    {
      name:'MEAT WITH SAUCE & VEGETABLES',
      dis:'nappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.',
      img:meat
    },
  ]

  return (
    // <section className="home" style={{ backgroundImage: "url(/img/red.jpg"}}>
    //   <div className="home_left">
    //     <h1 className="hm">The Healthy Food for Wealthy Mood</h1>
    //     <p>
    //       We believe in the commitment to our community and in fostering long
    //       term relationships with local farmers and fishermen. Our menus reflect
    //       these connections, featuring local, seasonal produce and sustainably
    //       sourced seafood and meats
    //     </p>

    //     <button className="home_button" onClick={exploreMenu}>
    //       Explore Menu
    //     </button>
    //   </div>
    //   <div className="home_right">
    //     <img src={HomeImg} alt="home-img" />
    //   </div>
    // </section>

    <div className>
        <header style={{ backgroundImage: "url(/img/red.jpg"}}>
          <div className="image">
            <img src={HomeImg} alt="home-img" />
          </div>

          <div className="header_text">
            <h1 className="hm">The Healthy Food for Wealthy Mood</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, minima.</p>
            <a href="">Expore our menu</a>          
          </div>
        </header>

        <section className="top-rated">
          <h2>Our Top Rated Dishes</h2>
        <div className="top-rated-meal">
            {top.map((item ) => (
              <div className="card">
                 <img src={item.img} alt={item.name} />
                 <div className="inner_text">
                    <h3>{item.name}</h3>
                    <p>{item.dis}</p>
                 </div>
                 
                
              </div>
            ))}
        </div>  
       
        </section>
    
    </div>

 
      // <section className="sec">
      //     <div className="home_left">
      //       <h1>The Healthy Food for Wealthy Mood</h1>
      //       <p>
      //         We believe in the commitment to our community and in fostering long
      //         term relationships with local farmers and fishermen. Our menus reflect
      //         these connections, featuring local, seasonal produce and sustainably
      //         sourced seafood and meats
      //       </p>

      //       <button className="home_button" onClick={exploreMenu}>
      //         Explore Menu
      //       </button>
      //     </div>
          
      //     <div className="home_right">
      //       <img src={HomeImg} alt="home-img" />
      //     </div>
      // </section>
  

  );
};

export default Home;
