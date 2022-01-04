import React, { useReducer } from "react";
import MainPage from "./main";
import CoverPage from "./cover";
import { PartCover } from "../layouts";
import { reducer, initialState } from "../config/store";

export const PageContext = React.createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { indexPage } = state;

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {indexPage === 1 ? <CoverPage /> : <MainPage />}
      <PartCover />
    </PageContext.Provider>
  );
};

export default App;
