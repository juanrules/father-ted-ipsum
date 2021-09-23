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
import { setColourScheme, toggleTheme } from "./utilities/handleColourScheme";



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
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const isPrefColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setColourScheme(isPrefColorSchemeDark, localStorage.isDarkTheme, setDarkTheme);

    setEpisode(getEpisode(data))

  }, [isDarkTheme]);

  return (
    <div className={`app ${isDarkTheme ? "dark" : ""}`}>
      <Sidebar toggleFn={() => setShowCredits(!showCredits)} toggleTheme={() => toggleTheme(isDarkTheme, setDarkTheme)}
        isDarkTheme={isDarkTheme} />
      <main>
        <Toolbar
          getNewEpisode={() => setEpisode(getEpisode(data))}
          filterBadWords={() => setHasBadWords(!hasBadWords)}
          hasBadWords={hasBadWords}
          hasLatinWords={hasLatinWords}
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
    </div>
  );
};

export default App;
