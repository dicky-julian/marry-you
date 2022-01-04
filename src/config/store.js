export const initialState = {
  isOpenCover: false,
  indexPage: 1,
};

export const actionTypes = {
  SET_OPEN_COVER: "SET_OPEN_COVER",
  SET_INDEX_PAGE: "SET_INDEX_PAGE",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_OPEN_COVER:
      return {
        ...state,
        isOpenCover: action.payload,
      };
    case actionTypes.SET_INDEX_PAGE:
      return {
        ...state,
        indexPage: action.payload,
      };
    default:
      return state;
  }
};
