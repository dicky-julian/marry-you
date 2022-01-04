import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 3000,
  autoplaySpeed: 3000,
  autoplay: true,
  fade: true,
  arrows: false,
  dots: false,
};

export const HeaderCarousel = () => {
  return (
    <header className="header">
      <Slider {...settings}>
        <div className="header-item">
          <img src="img/header_1.webp" />
        </div>
        <div className="header-item">
          <img src="img/header_2.webp" />
        </div>
        <div className="header-item">
          <img src="img/header_3.webp" />
        </div>
      </Slider>
      <div className="header-overlay"></div>
      <div className="header-body">
        <h1>Rhesa</h1>
        <span className="font-primary">&</span>
        <h1>Oriettha</h1>
        <h2 className="font-primary">Are Getting Married</h2>
        <h3 className="font-primary">04 September 2021</h3>
      </div>
    </header>
  );
};
