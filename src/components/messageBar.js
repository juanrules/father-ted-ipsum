import React from "react";
import "./messageBar.scss";
const messageBar = ({ show }) => {
  return <div className={`messageBar ${show ? "is-active" : ""}`}>Copied!</div>;
};

export default messageBar;
