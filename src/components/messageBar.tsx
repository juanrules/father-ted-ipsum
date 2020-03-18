import React, { FunctionComponent } from "react";
import "./messageBar.scss";

interface iMessageBar {
  show: boolean;
}

const messageBar: FunctionComponent<iMessageBar> = ({ show }) => {
  return <div className={`messageBar ${show ? "is-active" : ""}`}>Copied!</div>;
};

export default messageBar;
