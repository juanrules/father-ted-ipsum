import React, { FunctionComponent } from "react";
import "./license.scss";

const license: FunctionComponent = () => (
  <aside className="license">
    This application is licensed under the{" "}
    <a href="https://github.com/juanrules/father-ted-ipsum/blob/master/LICENSE">
      MIT License
    </a>{" "}
    | All Episode's scripts and Father Ted branding rights belongs to their
    owners.
    | aaaand Icons are from <a href="https://fontawesome.com/license" target="_blank" rel="noreferrer">FontAwesome.</a>
  </aside>
);

export default license;
