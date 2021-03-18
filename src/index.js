import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

import App from "./App";
const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AlertProvider template={AlertMUITemplate} {...options}>
        <App />
      </AlertProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
