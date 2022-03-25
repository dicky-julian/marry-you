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
            src="img/couples/cardGroomrounded.webp"
          />
          <h5 className="font-cormorant">Rhesa Daiva Bremana Ginting</h5>
          <p className="font-fade">
            Putra pertama dari Bpk. Asmat Ginting & Ibu Emirita br. Sembiring
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
            src="img/couples/cardBriderounded.webp"
          />
          <h5 className="font-cormorant">Oriettha Deany br. Lumbantoruan</h5>
          <p className="font-fade">
            Putri ketiga dari Bpk. Edison Lumbantoruan & Ibu Basaria br. Sinaga
          </p>
        </div>
      </div>
    </section>
  );
};
