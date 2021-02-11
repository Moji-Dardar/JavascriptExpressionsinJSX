import React from "react";
import ReactDOM from "react-dom";

const fname = "Tony";
const lname = "Tang";
const num = "7";
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
