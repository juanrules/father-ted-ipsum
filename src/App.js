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
import License from "./components/license";
import MessageBar from "./components/messageBar";
import { selectElement } from "./utilities/clipboard";

const App = () => {
  const [episode, setEpisode] = useState(getEpisode(data));
  const [hasBadWords, setHasBadWords] = useState(true);
  const [hasLatinWords, setHasLatinWords] = useState(true);
  const [showCredits, setShowCredits] = useState(false);
  const [showMessageBar, setShowMessageBar] = useState(false);
  const copyAll = async () => {
    selectElement(document.querySelector(".canvas"));
    document.execCommand("copy");
    setShowMessageBar(true);

    setTimeout(() => setShowMessageBar(false), 2000);
  };
  return (
    <>
      <Sidebar toggleFn={() => setShowCredits(!showCredits)} />
      <main>
        <Toolbar
          getNewEpisode={() => setEpisode(getEpisode(data))}
          filterBadWords={() => setHasBadWords(!hasBadWords)}
          filterLatinWords={() => setHasLatinWords(!hasLatinWords)}
          copyAll={() => copyAll()}
        />
        <Canvas
          {...episode}
          hasBadWords={hasBadWords}
          hasLatinWords={hasLatinWords}
        />

        <License />

        {showCredits && (
          <Modal toggleFn={() => setShowCredits(!showCredits)}>
            {content.modal.title && (
              <h3 className="modal__title">content.modal.title</h3>
            )}
            {content.modal.paragraphs &&
              arrayToParagraphs(content.modal.paragraphs)}
            <p>
              <br />
              <a
                className="button"
                href="https://github.com/juanrules/father-ted-ipsum"
              >
                Checkout the Github repo
              </a>
            </p>
          </Modal>
        )}
        <MessageBar show={showMessageBar} />
      </main>
    </>
  );
};

export default App;
