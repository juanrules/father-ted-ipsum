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
  </aside>
);

export default license;
