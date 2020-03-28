import React, { useState, useEffect } from "react";
import "./App.scss";
import data from "./data/episodes";
import { getEpisode } from "./services/dataHandler";
import Canvas from "./components/canvas";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Modal from "./components/modal";
import content from "./data/content";
import License from "./components/license";
import MessageBar from "./components/messageBar";
import { copyAll } from "./utilities/clipboard";

const App = () => {
  const [episode, setEpisode] = useState({
    content: "",
    name: "",
    season: 0,
    number: 0
  });
  const [hasBadWords, setHasBadWords] = useState(false);
  const [hasLatinWords, setHasLatinWords] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showMessageBar, setShowMessageBar] = useState(false);

  useEffect(() => setEpisode(getEpisode(data)), []);

  return (
    <>
      <Sidebar toggleFn={() => setShowCredits(!showCredits)} />
      <main>
        <Toolbar
          getNewEpisode={() => setEpisode(getEpisode(data))}
          filterBadWords={() => setHasBadWords(!hasBadWords)}
          filterLatinWords={() => setHasLatinWords(!hasLatinWords)}
          copyAll={() => copyAll(".canvas", setShowMessageBar)}
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
              content.modal.paragraphs.map((e, i) => <p key={i}>{e}</p>)}
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
