import React, { FunctionComponent } from "react";
import "./toggleSwitch.scss";

interface iToggleSwitch {
  onclickFn: any;
  children: any;
  id: string;
  isChecked?: boolean
}

const ToggleSwitch: FunctionComponent<iToggleSwitch> = ({
  onclickFn,
  children,
  id,
  isChecked = false
}) => {
  return (
    <div className="toggleSwitch">
      <input type="checkbox" id={id} checked={isChecked} readOnly />
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
