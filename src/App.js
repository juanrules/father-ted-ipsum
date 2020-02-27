import React, { useState } from "react";
import "./App.scss";
import data from "./data/episodes";
import { getEpisode } from "./services/dataHandler";
import Canvas from "./components/canvas";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Modal from "./components/modal";
import content from "./data/content";
import { arrayToParagraphs } from "./utilities/strings";

const App = () => {
  const [episode, setEpisode] = useState(getEpisode(data));
  const [hasBadWords, setHasBadWords] = useState(true);
  const [hasLatinWords, setHasLatinWords] = useState(true);
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
            {content.modal.title && (
              <h3 className="modal__title">content.modal.title</h3>
            )}
            {content.modal.paragraphs &&
              arrayToParagraphs(content.modal.paragraphs)}
          </Modal>
        )}
      </main>
    </>
  );
};

export default App;
