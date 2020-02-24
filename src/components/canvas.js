import React from "react";
import "./canvas.scss";
import { paragrahpsCutter, filterContent } from "../utilities/strings";
import PropTypes from "prop-types";

const Canvas = ({ content, name, number, season }) => {
  const getContent =
    content && paragrahpsCutter(filterContent(content).split("\n"), 6);
  return (
    <div className="canvas">
      <h3 className="canvas__title">{name}</h3>
      <span className="canvas__metaData">
        From: Season {season}, Episode {number}
      </span>
      {getContent.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
};

Canvas.propTypes = {
  content: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired
};

export default Canvas;
