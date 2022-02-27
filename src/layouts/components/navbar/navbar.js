import React, { useEffect, useState } from "react";
// import audioFile from '/audio/audio_2.mp3'
import audioFile from '../../../assets/audio/audio_2.mp3';


// const useAudio = () => {

//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause() 

//     if (audio.current?.paused && audio.current?.currentTime > 0 && audio.current?.ended) {
//       audio.current?.play();
//     } else if (audio.current?.ended) {
//       audio.current?.play();
//     } else {
//       audio.current?.pause();
//     }
//   }, [playing, audio]);

//   useEffect(() => {
//     audio.addEventListener("ended", () => setPlaying(true));
//     return () => {
//       audio.removeEventListener("ended", () => setPlaying(false));
//     };
//   }, [audio]);

//   return [playing, toggle];
// };

export const Navbar = () => {
  const [indexScroll, setIndexScroll] = useState(1);
  const [playAudio, setPlayAudio] = useState(true);

  const [audio] = useState(new Audio(audioFile));

  audio.autoplay = true;

  const toggle = () => setPlayAudio(!playAudio);

  const handleScroll = () => {
    setIndexScroll(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
     playAudio ? audio.play() : audio.pause();
     
     if (audio.current?.paused && audio.current?.currentTime > 0  && audio.current?.ended) {
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
        {playAudio ? (
          <img src="img/icons/icon-stop.webp" />
        ) : (
          <img src="img/icons/icon-play.webp" />
        )}
      </div>
    </>
  );
};
