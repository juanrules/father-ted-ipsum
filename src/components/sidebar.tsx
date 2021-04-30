import React, { FunctionComponent } from "react";
import "./sidebar.scss";
import { version } from "../../package.json";
import ToggleSwitch from "./toggleSwitch";
import moon from "../img/moon-regular.svg";
import sun from "../img/sun-regular.svg";
interface iSidebar {
  toggleFn: any;
  toggleTheme: any;
  isDarkTheme: boolean
}

const Sidebar: FunctionComponent<iSidebar> = ({ toggleFn, toggleTheme, isDarkTheme }) => {
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

      <div className="sidebar__actions" aria-label="Colour scheme toggle checkbox">
        <img src={sun} height="24px" width="24px" alt="sun icon" onClick={toggleTheme} />
        <span className="sidebar__actions-label"> </span>
        <ToggleSwitch id="theme-mode" onclickFn={toggleTheme} isChecked={isDarkTheme}>
          <img src={moon} height="24px" width="24px" alt="moon icon" />
        </ToggleSwitch>
      </div>




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
