import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoContainer from "./components/TodoContainer";

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer></TodoContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
