import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer_body from "../modules/body";
import reducer_title from "../modules/title";
import reducer_user from "../modules/user";

const rootReducer = combineReducers({
  reducer_title: reducer_title,
  reducer_body: reducer_body,
  reducer_user: reducer_user,
});

const store = createStore(rootReducer);

export default store;
