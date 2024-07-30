import React from "react";
import "../css/Hero.css";
import Play from "../assets/Play-button.png";
import Demo from "../assets/Play-Demo.png";
import CTA from "../assets/CTA.png";
import Traveller from "../assets/Traveller.png"
const Hero = () => {
  return (
    <div className="Hero">
      <div className="left">
        <div>
          <p className="tagline">BEST DESTINATIONS AROUND THE WORLD</p>
          <h1 className="heading">
            Travel, enjoy and live a new and full life.
          </h1>
        </div>
        <div>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </div>
        <div className="buttons">
          <a href="">
            <img src={CTA} alt="" />
          </a>
          <a href="">
            <img src={Demo} alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <img src={Traveller} alt="" />
      </div>
    </div>
  );
};

export default Hero;
