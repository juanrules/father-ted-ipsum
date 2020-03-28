import React, { FunctionComponent } from "react";
import "./toggleSwitch.scss";

interface iToggleSwitch {
  onclickFn: any;
  children: any;
  id: string;
}

const ToggleSwitch: FunctionComponent<iToggleSwitch> = ({
  onclickFn,
  children,
  id
}) => {
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
