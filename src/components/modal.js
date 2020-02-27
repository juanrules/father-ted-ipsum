import React from "react";
import "./modal.scss";

const Modal = ({ children, toggleFn }) => {
  return (
    <>
      <div className="modal">
        {children}
        <span className="modal__close" onClick={() => toggleFn()}>
          &#10006;
        </span>
      </div>
      <div className="backdrop" onClick={() => toggleFn()}></div>
    </>
  );
};

export default Modal;
