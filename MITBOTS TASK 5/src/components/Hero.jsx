import React from "react";
import "./Hero.css";
import heroImage from "../assets/images.jpeg"; // You can add any food banner image here

function Hero() {
  return (
    <section className="hero">
  <div className="hero-bg"></div>   {/* blurred background image */}
  <div className="hero-card">
    <h1>Welcome to My Restaurant</h1>
    <p>Delicious food made with love, just for you!</p>
    <a href="#menu" className="hero-btn">View Menu</a>
  </div>
</section>


  );
}

export default Hero;
