import React, { useEffect, useState, useRef } from "react";
import { Collapse } from "react-collapse";

export const PartGift = () => {
  const [isOpenGift, setIsOpenGift] = useState(false);

  const handleCopy = (value) => {
      navigator.clipboard.writeText(value).then(() => {
        console.log('OK')
      }).catch((error) => {
        console.log("error", error.message)
      })
  }


  return (
    <section id="gift" className="gift">
      <img className="img-figure" src="img/section-3.webp" />
      <div className="gift-content">
        <div className="gift-content-cover">
          <img src="img/couples/moments_7.webp" />
        </div>
        <div className="gift-content-caption">
          <h3 className="font-great-vibes">Digital Gift</h3>
          <p>
            Your blessing and prayer are the greatest gifts we can have.
            However, if you want to give us material support or congratulatory
            gift, kindly click the link below. May God give His abundant grace
            in return. Stay safe.
          </p>
          <button
            className="btn btn-primary font-cormorant"
            onClick={() => setIsOpenGift((prevState) => !prevState)}
          >
            Open Digital Gift
          </button>
          <Collapse isOpened={isOpenGift}>
            <div className="bank-list">
              <div className="bank-list-items">
                <img src="img/icons/bank-mandiri.webp" />
                <p>
                  9000023105670
                  <br />
                  a.n. Rhesa Daiva Bremana
                </p>
                 <button className="btn btn-primary" onClick={()=>{handleCopy('9000023105670')}}>Copy Text</button>
              </div>
              <div className="bank-list-items">
                <img src="img/icons/bank-bni.webp" />
                <p>
                  0454534219
                  <br />
                  a.n. Oriettha Deany
                </p>
                <button className="btn btn-primary" onClick={()=>{handleCopy('0454534219')}}>Copy Text</button>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

