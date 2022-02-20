export const initialState = {
  isOpenCover: false,
  isPortrait: false,
  indexPage: 1,
  indexLocation: 0,
};

export const actionTypes = {
  SET_OPEN_COVER: "SET_OPEN_COVER",
  SET_PORTRAIT: "SET_PORTRAIT",
  SET_INDEX_PAGE: "SET_INDEX_PAGE",
  SET_INDEX_LOCATION: "SET_INDEX_LOCATION",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_OPEN_COVER:
      return {
        ...state,
        isOpenCover: action.payload,
      };
    case actionTypes.SET_PORTRAIT:
      return {
        ...state,
        isPortrait: action.payload,
      };
    case actionTypes.SET_INDEX_PAGE:
      return {
        ...state,
        indexPage: action.payload,
      };
    case actionTypes.SET_INDEX_LOCATION:
      return {
        ...state,
        indexLocation: action.payload,
      };
    default:
      return state;
  }
};
