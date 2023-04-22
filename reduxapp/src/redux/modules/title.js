const SET_TITLE = "SET_TITLE";
const RESET_TITLE = "RESET_TITLE";

const initialstate = "";

export const settitle = (e) => {
  return { type: SET_TITLE, payload: e.target.value };
};

export const resettitle = () => {
  return { type: RESET_TITLE };
};

export const reducer_title = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.payload;
    case RESET_TITLE:
      return initialstate;
    default:
      return state;
  }
};

export default reducer_title;
