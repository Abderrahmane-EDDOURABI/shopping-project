import React from "react";
import "./banner.css";

import banner__image from "../../assets/banner/banner__image.png";

const Banner = () => {
  return (
    <article className="banner__container">
      <div className="banner__content">
        <h1 className="banner__title">Enjoy the Sales</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor.
        </p>
        <button className="banner__button">Shop Now</button>
      </div>
      <div className="banner__image">
        <img src={banner__image} alt="Banner Image" className="banner__imag" />
      </div>
    </article>
  );
};

export default Banner;
