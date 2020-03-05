import React from "react";
import "./canvas.scss";
import {
  paragrahpsCutter,
  filterContent,
  arrayToParagraphs
} from "../utilities/strings";
import PropTypes from "prop-types";

const Canvas = ({
  content,
  name,
  number,
  season,
  hasBadWords,
  hasLatinWords
}) => {
  const getContent =
    content &&
    paragrahpsCutter(
      filterContent(content, hasBadWords, hasLatinWords).split("\n"),
      6
    );
  return (
    <div className="canvas">
      <h3 className="canvas__title">{name}</h3>
      <span className="canvas__metaData">
        From: Season {season}, Episode {number}
      </span>

      {getContent && arrayToParagraphs(getContent)}
    </div>
  );
};

Canvas.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
  hasBadWords: PropTypes.bool.isRequired,
  hasLatinWords: PropTypes.bool.isRequired
};

export default Canvas;
