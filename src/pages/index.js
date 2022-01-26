import React, { useEffect, useReducer } from "react";
import MainPage from "./main";
import CoverPage from "./cover";
import { PartCover } from "../layouts";
import { reducer, actionTypes, initialState } from "../config/store";

export const PageContext = React.createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { indexPage, isPortrait } = state;

  const handleChangeOrientation = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    dispatch({
      type: actionTypes.SET_PORTRAIT,
      payload: height > width,
    });
  };

  useEffect(() => {
    handleChangeOrientation();
    window.addEventListener("resize", handleChangeOrientation);
    return () => {
      window.removeEventListener("resize", handleChangeOrientation);
    };
  }, []);

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {indexPage === 1 ? <CoverPage /> : <MainPage />}
      <PartCover />
    </PageContext.Provider>
  );
};

export default App;
