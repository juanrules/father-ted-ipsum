import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("Test App component", () => {
  test("The App renders", () => {
    // const props = {
    //   number: 6,
    //   season: 1,
    //   name: "Grant Unto Him Eternal Rest",
    //   content: "Feck! Arse. \n- These do work. \n- You're right there",
    //   hasBadWords: true,
    //   hasLatinWords: false
    // };

    render(<App />);
  });
});
