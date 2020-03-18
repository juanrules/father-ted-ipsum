import React, { FunctionComponent } from "react";
import Button from "./button";
import ToggleSwitch from "./toggleSwitch";
import "./toolbar.scss";

interface iToolbar {
  getNewEpisode: any;
  filterBadWords: any;
  filterLatinWords: any;
  copyAll: any;
}

const Toolbar: FunctionComponent<iToolbar> = ({
  getNewEpisode,
  filterBadWords,
  filterLatinWords,
  copyAll
}) => {
  return (
    <div className="toolbar">
      <div className="toolbar__filters">
        <ToggleSwitch onclickFn={filterBadWords} id="badWordsSwitch">
          down with the filthy words
        </ToggleSwitch>
        <ToggleSwitch onclickFn={filterLatinWords} id="LatinWordsSwitch">
          remove Latin words
        </ToggleSwitch>
      </div>
      <div className="toolbar__actions">
        <Button onclickFn={getNewEpisode}>Get another episode</Button>
        <Button onclickFn={() => copyAll()} cssClasses="primary">
          Copy all
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
