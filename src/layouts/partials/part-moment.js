import React from "react";

export const PartMoment = () => {
  return (
    <section id="moments" className="moments">
      <img className="img-figure" src="img/section-2.webp" />
      <img className="img-figure" src="img/section-2.webp" />
      <div className="moments-content">
        <h3 className="font-great-vibes">Our Moments</h3>
        <div className="moments-grid">
          <div
            className="moments-grid-img"
            style={{ backgroundImage: "url(img/couples/moments_1.webp)" }}
          ></div>
          <div
            className="moments-grid-img"
            style={{ backgroundImage: "url(img/couples/moments_2.webp)" }}
          ></div>
          <div
            className="moments-grid-img"
            style={{ backgroundImage: "url(img/couples/moments_11.webp)" }}
          ></div>
          <div
            className="moments-grid-img"
            style={{ backgroundImage: "url(img/couples/moments_4.webp)" }}
          ></div>
          <div
            className="moments-grid-img"
            style={{ backgroundImage: "url(img/couples/moments_5.webp)" }}
          ></div>
          <div
            className="moments-grid-img"
            style={{ backgroundImage: "url(img/couples/moments_6.webp)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};
