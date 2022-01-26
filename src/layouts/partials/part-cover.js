import React from "react";
import { PageContext } from "../../pages";

export const PartCover = () => {
  const { state } = React.useContext(PageContext);
  const { isOpenCover, indexPage } = state;

  return (
    <>
      <div
        // className="part-cover part-cover--left"
        className={`part-cover part-cover--left ${
          isOpenCover
            ? indexPage === 2
              ? "part-cover--close"
              : "part-cover--open"
            : ""
        }`}
      >
        <div className="background-overlay --left"></div>
        <div
          className={`cover-title ${
            indexPage === 2 ? "cover-title--fade" : ""
          }`}
        >
          {/* <h1 className="font-cormorant">The Wedding</h1>
          <h6>Celebration</h6> */}
          <span className="name-tag name-tag-latter">R</span>
          {!isOpenCover && (
            <span className="name-tag name-tag-connector">&</span>
          )}
          <span className="line-decoration"></span>
        </div>
      </div>
      <div
        // className="part-cover part-cover--right"
        className={`part-cover part-cover--right ${
          isOpenCover
            ? indexPage === 2
              ? "part-cover--close"
              : "part-cover--open"
            : ""
        }`}
      >
        <div className="background-overlay --right"></div>
        <span className="name-tag name-tag-latter">O</span>
        <span className="line-decoration"></span>
      </div>
    </>
  );
};
