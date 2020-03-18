import React, { ReactElement } from "react";
import "./button.scss";

interface button {
  children: {};
  onclickFn: any;
  cssClasses?: string;
}

const Button = ({ children, onclickFn, cssClasses }: button): ReactElement => {
  return (
    <button className={`button ${cssClasses}`} onClick={() => onclickFn()}>
      {children}
    </button>
  );
};

export default Button;
