import React from "react";
import image from "../assets/Testimonial.png";
import "../css/Testimonial.css";
import { logo } from "../constants";
const Testimonial = () => {
  return (
    <div className="testomonial-container">
      <div className="testimonial">
        <div className="left-testimonial">
          <h6>TESTIMONIAL</h6>
          <h1>What People Say About Us.</h1>
        </div>
        <div className="right-testimonial">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="logos">
        {logo.map((items, index)=>(
            <div className="logo-container" key={index}>
                <img src={items.image} alt="" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
