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
    console.log("Is")
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
      <div className="cover-page-overlay">
        <div className="cover-page-content">     
          <div className="cover-header">
            <div className="cover-title">
              {invitedName && <h6><b>Dear {invitedName}</b></h6>}
              <h6 className="greetings">With happy hearts we invite you <br />  to celebrate the wedding of</h6>
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
