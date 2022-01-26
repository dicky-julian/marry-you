import React from "react";
import Slider from "react-slick";
import { PageContext } from "../../../pages";

const settings = {
  infinite: true,
  speed: 3000,
  autoplaySpeed: 3000,
  autoplay: true,
  fade: true,
  arrows: false,
  dots: false,
};

const landscapeBackground = ["header_1.webp", "header_2.webp", "header_3.webp"];

const portraitBackground = [
  "couples/moments_2.webp",
  "couples/moments_9.webp",
  "couples/moments_10.webp",
];

export const HeaderCarousel = () => {
  const { state } = React.useContext(PageContext);
  const { isPortrait } = state;
  return (
    <header className="header">
      <Slider {...settings}>
        {(isPortrait ? portraitBackground : landscapeBackground).map(
          (pathname, index) => (
            <div className="header-item" key={`${index}-${pathname}`}>
              <img src={`img/${pathname}`} />
            </div>
          )
        )}
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
