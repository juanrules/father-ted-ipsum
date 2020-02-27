import React from "react";
import "./sidebar.scss";
import { version } from "./../../package.json";

const Sidebar = ({ toggleFn }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          className=""
          src="father-ted-logo.svg"
          width="80"
          height="220"
          alt="Father ted character"
        />
      </div>
      <h1 className="sidebar__title">
        Father Ted <br />~ ipsum ~
      </h1>
      <p className="sidebar__description">
        A random text generator based on Father Ted’s scripts
      </p>

      <p className="sidebar__credits">
        Made by{" "}
        <a href="https://thisjuanpernia.com" title="Juan Pernia website's url">
          this Juan
        </a>
        <br />
        with{" "}
        <button title="juan pernias website's url" onClick={() => toggleFn()}>
          these tecnologies.
        </button>
        <br />
        {`v${version}`}
      </p>
    </div>
  );
};

export default Sidebar;
