import React from "react";
import Canvas from "./canvas";
import { render } from "@testing-library/react";

describe("Test canvas component", () => {
  test("The component renders", () => {
    const props = {
      number: 6,
      season: 1,
      name: "Grant Unto Him Eternal Rest",
      content: "Feck! Arse. \n- These do work. \n- You're right there",
      hasBadWords: true,
      hasLatinWords: false
    };

    render(<Canvas {...props} />);
  });
});
