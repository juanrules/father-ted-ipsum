import React, { FunctionComponent } from "react";
import "./canvas.scss";
import { paragrahpsCutter, filterContent } from "../utilities/strings";

interface iCanvas {
  content: string;
  name: string;
  number: number;
  season: number;
  hasBadWords: boolean;
  hasLatinWords: boolean;
}

const Canvas: FunctionComponent<iCanvas> = ({
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

      {getContent && getContent.map((e, i) => <p key={i}>{e}</p>)}
    </div>
  );
};

export default Canvas;
