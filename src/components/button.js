import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, onclickFn, cssClasses }) => {
  return (
    <button className={`button ${cssClasses}`} onClick={() => onclickFn()}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onclickFn: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
