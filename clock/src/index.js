import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Clock from "./clock";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Clock />, document.getElementById("root"));
registerServiceWorker();
