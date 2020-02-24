import React, { useState } from "react";
import Button from "./button";
import { selectElement } from "../utilities/clipboard";
import ToggleSwitch from "./toggleSwitch";
import "./toolbar.scss";

const Toolbar = ({ getNewEpisode, filterBadWords, filterLatinWords }) => {
  const [copyAllLabel, setCopyAllLabel] = useState("Copy all");
  const copy = async () => {
    selectElement(document.querySelector(".canvas"));
    document.execCommand("copy");
    setCopyAllLabel("Copied!");

    setTimeout(() => setCopyAllLabel("Copy all"), 2000);
  };

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
        <Button onclickFn={() => copy()}>{copyAllLabel}</Button>
      </div>
    </div>
  );
};

export default Toolbar;
