import React from "react";
import cs from "classnames";
import { INavigationToggle } from "../navigation.model";
import "./NavigationToggle.scss";

/**
 * The NavigationToggle component is used to toggle the Navigation state beetween open/close
 */
const NavigationToggle: React.FC<INavigationToggle> = (props) => {
  const { isOpen, handleNavToggle } = props;

  const classNames = cs("navigation-toggle", isOpen && "--isopen");

  return (
    <button className={classNames} onClick={handleNavToggle}>
      <div className="line" />
    </button>
  );
};

export default NavigationToggle;
