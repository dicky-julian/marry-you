import React, { useEffect, useState } from "react";

const useAudio = (url) => {

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  // audio.autoplay = true

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause() 
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(true));
    window.addEventListener("touchstart", () => {
      audio.play()
    }, {passive: true})
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
      audio.removeEventListener("touchstart",(() =>{
        audio.pause();
        console.log("touchstart event removed!")
      }))
    };
  }, []);

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
          <img src="img/icons/icon-wedding.webp" />
          <span>Couples</span>
        </a>
        <a href="#events" className="nav-link">
          <img src="img/icons/icon-calendar.png" />
          <span>Events</span>
        </a>
        <a href="#moments" className="nav-link">
          <img src="img/icons/icon-album.webp" />
          <span>Moments</span>
        </a>
        <a href="#wishes" className="nav-link">
          <img src="img/icons/icon-wish.webp" />
          <span>Wishes</span>
        </a>
      </nav>
      <div
        className={`toggle-audio ${indexScroll > 64 ? "active" : ""}`}
        onClick={toggle}
      >
        {playing ? (
          <img src="img/icons/icon-stop.webp" />
        ) : (
          <img src="img/icons/icon-play.webp" />
        )}
      </div>
    </>
  );
};