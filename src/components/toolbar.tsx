import React, { FunctionComponent } from "react";
import Button from "./button";
import ToggleSwitch from "./toggleSwitch";
import "./toolbar.scss";

interface iToolbar {
  getNewEpisode: Function;
  filterBadWords: Function;
  filterLatinWords: Function;
  copyAll: Function;
  hasLatinWords: boolean;
  hasBadWords: boolean;
}

const Toolbar: FunctionComponent<iToolbar> = ({
  getNewEpisode,
  filterBadWords,
  filterLatinWords,
  hasLatinWords,
  hasBadWords,
  copyAll
}) => {
  return (
    <div className="toolbar">
      <div className="toolbar__filters">
        <ToggleSwitch onclickFn={filterBadWords} isChecked={hasBadWords} id="badWordsSwitch">
          down with the filthy words
        </ToggleSwitch>
        <ToggleSwitch
          onclickFn={filterLatinWords}
          isChecked={hasLatinWords}
          id="LatinWordsSwitch">
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
