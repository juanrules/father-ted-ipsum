import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Sidebar from "./sidebar";

describe("Sidebar component", () => {
  test("Component renders", () => {
    render(<Sidebar>Hello</Sidebar>);
  });

  test("The sidebar's button triggers a function on click", () => {
    const mockFn = jest.fn();
    const instance = create(<Sidebar toggleFn={mockFn} />).root;

    const closeButton = instance.findByType("button");
    closeButton.props.onClick();

    expect(mockFn).toHaveBeenCalled();
  });
});
