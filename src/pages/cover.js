import React, {useState, useEffect} from "react";
import { PageContext } from "./index";
import { actionTypes } from "../config/store";
import { adjustVolume } from "../config/adjust-volume";

const CoverPage = () => {

  const [playAudio, setPlayAudio] = useState(false);
  const [audio] = useState(new Audio('/audio/audio_2.mp3'));

  // Set Volume
  audio.volume = 0.05

  useEffect (() => {

    if (audio.current?.paused && audio.current?.currentTime > 0 && audio.current?.ended) {
      audio.current?.play();
    } else if (audio.current?.ended) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
    
  }, [playAudio, audio])

  useEffect(() => {
    audio.addEventListener("ended", () => setPlayAudio(true), {passive: true});
    return () => {
      audio.removeEventListener("ended", () => setPlayAudio(false), {passive: true});
    };
  }, [audio]);

  // const invitedName = window.location.search?.slice(4)?.replaceAll("%20", " ");

  const params = new URLSearchParams(window.location.search);
  const invitedName = params.get("to");

  const { dispatch } = React.useContext(PageContext);

  const handleOpenCover = (isOpen) => {
    dispatch({
      type: actionTypes.SET_OPEN_COVER,
      payload: isOpen,
    });
  };

  const handleMovePage = (indexPage) => {
    dispatch({
      type: actionTypes.SET_INDEX_PAGE,
      payload: indexPage,
    });
  };

  const handleEnterInvitation = () => {
    handleOpenCover(false);
    setTimeout(() => {
      handleMovePage(2);
    }, 1000);
    setTimeout(() => {
      handleOpenCover(true);
    }, 1500);
    audio.play();
    setTimeout(() => {
      console.log('start adjust volume')
      adjustVolume(audio, 1).then(() => { console.log('Adjusting volume' )})
    }, 2000)
  };

  const onMountCover = () => {
    setTimeout(() => {
      handleOpenCover(true);
    }, 1000);
  };

  React.useEffect(() => {
    onMountCover();
  }, []);

  return (
    <div className="cover-page">
      <div className="cover-page-overlay">
        <div className="cover-page-content">     
          <div className="cover-header">
            <div className="cover-title">
              {invitedName && <h5 className="guest">Dear {invitedName}</h5>}
              <h6 className="greetings">With happy hearts, we invite you <br />  to celebrate the wedding of</h6>
              <h2 className="font-great-vibes">Rhesa & Oriettha</h2>
            </div>
          </div>
          <div className="cover-footer">
            <div>
              <button className="btn-ghost" onClick={handleEnterInvitation}>
                <span className="psuedo-text">
                  <img src="img/icons/icon-heart.png" />
                  Open Invitation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
