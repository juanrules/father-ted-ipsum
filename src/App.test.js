import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import "./__mocks__/matches.mock";
describe("Test App component", () => {
  test("The App renders", () => {
    render(<App />);
  });
});
