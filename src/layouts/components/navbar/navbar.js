import React, { useEffect, useState } from "react";
import { BrowserDetection } from "../../../config/browser-detection";
// import audioFile from "../../../assets/audio/audio_2.mp3";

export const Navbar = () => {
  const [indexScroll, setIndexScroll] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setIndexScroll(window.pageYOffset);
  };

  return (
    <>
      <nav className={`navbar ${indexScroll > 64 ? "navbar--active" : ""}`}>
        <a href="#couples" className="nav-link">
          <img src="img/icons/icon-wedding.webp" alt="icon-wedding" />
          <span>Couples</span>
        </a>
        <a href="#events" className="nav-link">
          <img src="img/icons/icon-calendar.png" alt="icon-calendar" />
          <span>Events</span>
        </a>
        <a href="#moments" className="nav-link">
          <img src="img/icons/icon-album.webp" alt="icon-album" />
          <span>Moments</span>
        </a>
        <a href="#wishes" className="nav-link">
          <img src="img/icons/icon-wish.webp" alt="icon-wish" />
          <span>Wishes</span>
        </a>
      </nav>
      {/* <div ref={buttonRef}
        className={`toggle-audio ${indexScroll > 64 ? "active" : ""}`}
        onClick={toggle}

      >
        {playAudio ? (
          <img src="img/icons/icon-stop.webp" alt="icon-stop" />
        ) : (
          <img src="img/icons/icon-play.webp" alt="icon-play" />
        )}
      </div> */}
    </>
  );
};