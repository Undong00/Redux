const SET_BODY = "SET_BODY";
const RESET_BODY = "RESET_BODY";

const initialstate = "";

export const setbody = (e) => {
  return { type: SET_BODY, payload: e.target.value };
};

export const resetbody = () => {
  return { type: RESET_BODY };
};
const reducer_body = (state = initialstate, action) => {
  switch (action.type) {
    case SET_BODY:
      return action.payload;
    case RESET_BODY:
      return initialstate;
    default:
      return state;
  }
};

export default reducer_body;
