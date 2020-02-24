import React from "react";
import Canvas from "./canvas";
import { render } from "@testing-library/react";

describe("Test canvas component", () => {
  test("The component renders", () => {
    const props = {
      number: 6,
      season: 1,
      name: "Grant Unto Him Eternal Rest",
      content:
        "Feck! Arse. \n- These do work. \n- You're right there, Ted. \nFeck! Arse! Feck! (Silence ) (Helicopter) (Crash) (Sighs ) So, you're a nun? Right, Sister Monica. \nI've left your bags in the hall. \nI thought you might like to see the Holy Stone. \n- The what? - The Holy Stone of Clonrichert. \n- Great! - One of the holiest rocks in Europe. \nYou can get souvenir combs. \nThey're fantastic. \nI got one last year. \nThey've written, \"I saw the Holy Stone of Clonrichert. \n\" The Stone is great. \nWe've seen it ...",
      hasBadWords: true,
      hasLatinWords: false
    };

    render(<Canvas {...props} />);
  });
});
