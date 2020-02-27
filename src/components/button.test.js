import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Button from "./button";

describe("button component", () => {
  test("Component renders", () => {
    const mockFn = jest.fn();
    render(<Button onclickFn={mockFn}>Hello</Button>);
  });
  test("OnClick function fires", () => {
    const mockFn = jest.fn();
    const instance = create(<Button onclickFn={mockFn}>Hello</Button>).root;

    const button = instance.findByProps({
      className: "button"
    });

    button.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });
});
