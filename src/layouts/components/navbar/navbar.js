import React, { useEffect, useState } from "react";
import { BrowserDetection } from "../../../config/browser-detection";
import audioFile from "../../../assets/audio/audio_2.mp3";



export const Navbar = () => {
  const [indexScroll, setIndexScroll] = useState(1);
  // const [playing, toggle] = useAudio("/audio/audio_2.mp3");

  const [playAudio, setPlayAudio] = useState(false);
  const [audio] = new Audio(audioFile);

  useEffect(() => {
    playAudio ? audio.play() : audio.pause();

    if (audio.current?.paused && audio.current?.currentTime > 0 && audio.current?.ended) {
      audio.current?.play();
    } else if (audio.current?.ended) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
  }, [playAudio, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlayAudio(true));
    return () => {
      audio.removeEventListener("ended", () => setPlayAudio(false));
    };
  }, [audio]);

  const toggle = (e) => {
    e.preventDefault();
    setPlayAudio(!playAudio);
  }


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
        onClick={toggle}

      >
        {playAudio ? (
          <img src="img/icons/icon-stop.webp" alt="icon-stop" />
        ) : (
          <img src="img/icons/icon-play.webp" alt="icon-play" />
        )}
      </div>
    </>
  );
};