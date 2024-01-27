import React from "react";
import { cardData } from "./Data";
import FramesImage from "../images/frames.webp";
import Slider from "react-slick";

const settings = {
  dots:true,
  infinite: true,
  speed: 500,
  slidesToShow:3,
  slidesToScroll: 1,
};

const MySlider = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {cardData.map((framework, index) => (
              <div className="card" key={index}>
                <div className="image_wrapper">
                  <img src={framework.image} alt="" />
                </div>
                <div className="cardBody">
                  <a href="" className="cardName">
                    {framework.name}
                  </a>
                  <p className="description">{framework.description}</p>
                  <button className="viewBtn">VISIT</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
