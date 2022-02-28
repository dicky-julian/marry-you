import React, { useEffect, useState, useContext } from "react";
import { BrowserDetection } from "../../../config/browser-detection";
import audioFile from "../../../assets/audio/audio_2.mp3";
import { PageContext } from "../../../pages";

export const Navbar = () => {
  const { state } = useContext(PageContext);
  const { isOpenCover } = state;

  const [indexScroll, setIndexScroll] = useState(1);
  // const [playing, toggle] = useAudio("/audio/audio_2.mp3");

  const [playAudio, setPlayAudio] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  const handleAudioWhenOpenCover = (cover) => {
    cover ? setPlayAudio(true) : setPlayAudio(false);
  };

  const unblockAudio = () => {
    const audio = new Audio("/audio/audio_2.mp3");

    audio.play();
    audio.pause();
    audio.currnetTime = 0;

    document.body.removeEventListener("click", unblockAudio);
    document.body.removeEventListener("touchstart", unblockAudio);
  }

  useEffect(() => {
    document.addEventListener("click", unblockAudio);
    document.addEventListener("touchstart", unblockAudio);
  }, [])

  useEffect(() => {

    // playAudio ? audio.play() : audio.pause();
    audio.loop = true

    if (audio.current?.paused && audio.current?.currentTime > 0 && audio.current?.ended) {
      console.log('masup sini')
      audio.current?.play();
    } else if (audio.current?.ended) {
      console.log('masup kondisi 2')
      audio.current?.play();
    } else {
      console.log('masup kondisii terakhir')
      audio.current?.pause();
    }
  }, [playAudio, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlayAudio(true));
    return () => {
      audio.removeEventListener("ended", () => setPlayAudio(false));
    };
  }, [audio]);




  useEffect(() => {
    handleAudioWhenOpenCover(isOpenCover);
  }, [isOpenCover])

  const toggle = () => {
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