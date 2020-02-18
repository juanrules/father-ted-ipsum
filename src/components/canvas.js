import React from "react";
import "./canvas.scss";
import {
  paragrahpsCutter,
  badWordsRemover,
  latinWordsMixer
} from "../utilities/strings";

const Canvas = ({
  content,
  name,
  number,
  season,
  hasBadWords,
  hasLatinWords
}) => {
  const processedContent = () => {
    let test = content;

    if (!hasBadWords) {
      test = badWordsRemover(test);
    }

    if (!hasLatinWords) {
      test = latinWordsMixer(test.split(/[.]/g)).join(". ");
    }

    return test;
  };

  return (
    <div className="canvas">
      <h3 className="canvas__title">{name}</h3>
      <span className="canvas__metaData">
        From: Season {season}, Episode {number}
      </span>
      {paragrahpsCutter(processedContent().split("\n"), 6).map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
};

export default Canvas;
