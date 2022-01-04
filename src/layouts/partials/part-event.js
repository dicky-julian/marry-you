import React from "react";

export const PartEvent = () => {
  return (
    <section id="events" className="events">
      <div className="events-content">
        <h3 className="font-great-vibes">Wedding Events</h3>
        <div className="events-info">
          <div className="events-info-pemberkatan">
            <img src="img/icons/icon-wedding.webp" />
            <h5 className="font-cormorant">Pemberkatan</h5>
            <div className="events-info-list">
              <img src="img/icons/icon-time.webp" />
              <div>
                <p>Sabtu, 04 September 2021</p>
                <p>08.00 WIB</p>
              </div>
            </div>
            <hr />
            <div className="events-info-list">
              <img src="img/icons/icon-location.webp" />
              <div>
                <p>GBKP Bambu Raya</p>
                <p>Jl. Bambu Raya, Mangga, Medan Tuntungan - Medan</p>
              </div>
            </div>
            <a href="#locations">
              <button className="btn btn-primary font-cormorant">
                View Map
              </button>
            </a>
          </div>

          <div className="events-info-resepsi">
            <img src="img/icons/icon-rings.webp" />
            <h5 className="font-cormorant">Acara Adat dan Resepsi</h5>
            <div className="events-info-list">
              <img src="img/icons/icon-time.webp" />
              <div>
                <p>Sabtu, 04 September 2021</p>
                <p>08.00 WIB</p>
              </div>
            </div>
            <hr />
            <div className="events-info-list">
              <img src="img/icons/icon-location.webp" />
              <div>
                <p>Jambur Namaken</p>
                <p>Jl. Letjen Jamin Ginting No. 970/940, Beringin - Medan</p>
              </div>
            </div>
            <a href="#locations">
              <button className="btn btn-primary font-cormorant">
                View Map
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
