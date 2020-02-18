import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onclickFn }) => {
  return (
    <button className="button" onClick={() => onclickFn()}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onclickFn: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
