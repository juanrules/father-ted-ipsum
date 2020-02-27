import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Modal from "./modal";

describe("Modal component", () => {
  test("Component renders", () => {
    render(<Modal>Hello</Modal>);
  });

  test("The modal Closing button triggers a function on click", () => {
    const mockFn = jest.fn();
    const instance = create(<Modal toggleFn={mockFn}>Test</Modal>).root;

    const closeButton = instance.findByProps({
      className: "modal__close"
    });
    closeButton.props.onClick();

    expect(mockFn).toHaveBeenCalled();
  });

  test("The modal's Backdrop triggers a function on click", () => {
    const mockFn = jest.fn();
    const instance = create(<Modal toggleFn={mockFn}>Test</Modal>).root;

    const backDrop = instance.findByProps({
      className: "backdrop"
    });
    backDrop.props.onClick();

    expect(mockFn).toHaveBeenCalled();
  });
});
