import React from "react";
import { PageContext } from "./index";
import { actionTypes } from "../config/store";

const CoverPage = () => {
  const { state, dispatch } = React.useContext(PageContext);

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
    }, 2000);
    setTimeout(() => {
      handleOpenCover(true);
    }, 2500);
  };

  const onMountCover = () => {
    setTimeout(() => {
      handleOpenCover(true);
    }, 1500);
  };

  React.useEffect(() => {
    onMountCover();
  }, []);

  return (
    <div className="cover-page">
      <div className="cover-page-content">
        <div className="cover-header">
          <div className="cover-title">
            <h5 className="font-cormorant">The Wedding</h5>
            <h6>Celebration Of</h6>
            <h2 className="font-great-vibes">Rhesa & Oriettha</h2>
          </div>
        </div>
        <div className="cover-body">
          <img src="img/header_2.webp" />
        </div>
        <div className="cover-footer">
          <div>
            <p className="font-cormorant">I'ts Happening</p>
            <h6>04 September 2021</h6>
          </div>
          <div>
            <button className="btn-ghost" onClick={handleEnterInvitation}>
              <span className="psuedo-text">
                <img src="img/icons/icon-heart.png" />
                Buka Undangan
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
