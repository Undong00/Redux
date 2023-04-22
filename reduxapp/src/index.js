import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 추가한 코드
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <App />
  </Provider>
);
