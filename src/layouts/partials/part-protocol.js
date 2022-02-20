import React from "react";
import { HandSanitizerLogo, WashHandsLogo, CheckTemperatureLogo, UseMaskLogo, NoShakeHandLogo, SocialDistancingLogo } from "../../assets";

export const PartProtocol = () => {
  return (
    <section id="protocol" className="protocol">
      <div className="protocol-content">
        <h3 className="font-great-vibes">Health Protocol</h3>
        <div className="protocol-box">
            <div className="row">
                <div className="col">
                    <img src={HandSanitizerLogo} className="img-symbols" />
                    <p>Menggunakan Hand Sanitizer </p>
                </div>
                <div className="col">
                    <img src={WashHandsLogo} className="img-symbols" />
                    <p>Mencuci Tangan</p>
                </div>
            </div>
           <div className="row">
                <div className="col">
                    <img src={CheckTemperatureLogo} className="img-symbols" />
                    <p>Pemeriksaan Suhu Tubuh</p>
                </div>
                <div className="col">
                    <img src={UseMaskLogo} className="img-symbols" />
                    <p>Menggunakan Masker</p>
                </div>
           </div>
           <div className="row">
                <div className="col">
                    <img src={NoShakeHandLogo} className="img-symbols" />
                    <p>Tidak berjabat tangan</p>
                </div>
                <div className="col">
                    <img src={SocialDistancingLogo} className="img-symbols" />
                    <p>Menerapkan Social Distancing</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
