const ADD = "ADD";
const DELETE = "DELETE";

const initialstate = [
  {
    id: 1,
    title: "이동언",
    body: "이동언입니다.",
  },
];

export const adduser = (title, body) => {
  return { type: ADD, title, body };
};

export const deluser = (id) => {
  return { type: DELETE, id };
};

export const reducer_user = (state = initialstate, action) => {
  switch (action.type) {
    case ADD:
      const newUsers = {
        id: state.length + 1,
        title: action.title,
        body: action.body,
      };
      return [...state, newUsers];
    case DELETE:
      const delUser = state.filter((user) => user.id !== action.id);
      return delUser;
    default:
      return state;
  }
};

export default reducer_user;
