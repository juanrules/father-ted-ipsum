import React from "react";
import "./sidebar.scss";

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
        <a href="https://thisjuanpernia.com" title="juan pernias website's url">
          this Juan
        </a>
        <br />
        with{" "}
        <button title="juan pernias website's url" onClick={() => toggleFn()}>
          these tecnologies
        </button>
      </p>
    </div>
  );
};

export default Sidebar;
