import React from "react";
import { PageContext } from "./index";
import { actionTypes } from "../config/store";

const CoverPage = () => {
  const invitedName = window.location.search?.slice(4)?.replaceAll("%20", " ");
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
            <h2 className="font-great-vibes">Rhesa & Oriettha</h2>
            {invitedName && <h6>Dear {invitedName}</h6>}
          </div>
        </div>
        <div className="cover-body">
          <img src="img/header_2.webp" />
        </div>
        <div className="cover-footer">
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
