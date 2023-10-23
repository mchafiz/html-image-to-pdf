/* eslint-disable react/no-deprecated */
import React from "react";
import App from "./App.jsx";
import { render } from "react-dom";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
