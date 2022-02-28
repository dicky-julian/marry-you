import React, { useEffect, useState } from "react";
import { BrowserDetection } from "../../../config/browser-detection";

const useAudio = (url) => {

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    console.log("Playing status: ", playing);
    playing ? audio.play() : audio.pause() 
  }, [playing, audio]);

  useEffect(() => {
    // Check browser compatibility, if safari, sound must be played manually;
    if(BrowserDetection(window.navigator.userAgent) === "Apple Safari") {
      setPlaying(false);
    } else {
      setPlaying(true);
    };

    audio.addEventListener("ended", () => setPlaying(true));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export const Navbar = () => {
  const [indexScroll, setIndexScroll] = useState(1);
  const [playing, toggle] = useAudio("/audio/audio_2.mp3");
  const handleScroll = () => {
    setIndexScroll(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

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
      <div
        className={`toggle-audio ${indexScroll > 64 ? "active" : ""}`}
        onClickCapture={toggle}
      >
        {playing ? (
          <img src="img/icons/icon-stop.webp" alt="icon-stop" />
        ) : (
          <img src="img/icons/icon-play.webp" alt="icon-play" />
        )}
      </div>
    </>
  );
};