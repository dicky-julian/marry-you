import React from "react";

export const PartCouple = () => {
  return (
    <section
      id="couples"
      className="couples"
      style={{ backgroundImage: "url(img/section-1.webp)" }}
    >
      <div className="background-overlay"></div>
      <div className="couples-content">
        <div className="couples-profile">
          <img className="img-figure" src="img/section-2.webp" />
          <img className="img-figure" src="img/section-2.webp" />
          <img
            className="couples-profile-pict"
            src="img/couples/cardsGroomrounded.webp"
          />
          <h5 className="font-cormorant">Rhesa Daiva Bremana</h5>
          <p className="font-fade">
            Putra pertama dari Bpk. A. Ginting & Ibu E. br. Sembiring
          </p>
        </div>
        <div className="couples-intro">
          <h3 className="font-great-vibes">Meet Happy Couples</h3>
          <span
            style={{ backgroundImage: "url(img/icons/icon-dove.webp)" }}
          ></span>
          <p>
            Tuhan membuat segala sesuatu indah pada waktu-Nya dan lebih indah
            lagi saat Dia mempersatukan kami dalam suatu ikatan pernikahan kudus
          </p>
        </div>
        <div className="couples-profile">
          <img className="img-figure" src="img/section-2.webp" />
          <img className="img-figure" src="img/section-2.webp" />
          <img
            className="couples-profile-pict"
            src="img/couples/cardsBriderounded.webp"
          />
          <h5 className="font-cormorant">Oriettha Deany</h5>
          <p className="font-fade">
            Putri ketiga dari Bpk. E. Lumbantoruan & Ibu B. br. Sinaga
          </p>
        </div>
      </div>
    </section>
  );
};
