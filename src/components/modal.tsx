import React, { FunctionComponent } from "react";
import "./modal.scss";

interface iModal {
  children: any;
  toggleFn: any;
}

const Modal: FunctionComponent<iModal> = ({ children, toggleFn }) => {
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
