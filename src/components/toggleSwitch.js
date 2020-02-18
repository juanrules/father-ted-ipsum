import React from "react";
import "./toggleSwitch.scss";

const ToggleSwitch = ({ onclickFn, children, id }) => {
  return (
    <div className="toggleSwitch">
      <input type="checkbox" id={id} />
      <label
        htmlFor={id}
        onClick={() => onclickFn()}
        title="Remove all the Fecks, Arse, etc."
      >
        {children}
      </label>
    </div>
  );
};

export default ToggleSwitch;
