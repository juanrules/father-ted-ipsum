import React, { useState } from "react";
import "./App.scss";
import data from "./data";
import { getEpisode } from "./services/dataHandler";
import Canvas from "./components/canvas";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Modal from "./components/modal";

const App = () => {
  const [episode, setEpisode] = useState(getEpisode(data));
  const [hasBadWords, setHasBadWords] = useState(true);
  const [hasLatinWords, setHasLatinWords] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      <Sidebar toggleFn={() => setShowCredits(!showCredits)} />
      <main>
        <Toolbar
          getNewEpisode={() => setEpisode(getEpisode(data))}
          filterBadWords={() => setHasBadWords(!hasBadWords)}
          filterLatinWords={() => setHasLatinWords(!hasLatinWords)}
        />
        <Canvas
          {...episode}
          hasBadWords={hasBadWords}
          hasLatinWords={hasLatinWords}
        />
        {showCredits && (
          <Modal toggleFn={() => setShowCredits(!showCredits)}>
            <h3 className="modal__title">About this project:</h3>
            <p>
              Hello! Simply put, you are interacting with a serveless ReactJs
              app hosted in an S3 bucket{" "}
              <span role="img" aria-label="boom">
                💥
              </span>
              .
            </p>
            <p>
              Behind the scenes there's an AWS pipeline that listens to new
              commits to the Master branch, compiles the code and puts it into a
              public S3 bucket.
            </p>
            <p>
              For the frontend, ReactJs is doing the trick with no backend
              required
            </p>
            <p>
              There are also unit tests to make sure everyhting is Honky dory
              everytime anything is changed in the code.
            </p>
            <p>
              I've also made the illustrations. This project was done to play
              with all the above technologies.
            </p>
          </Modal>
        )}
      </main>
    </>
  );
};

export default App;
