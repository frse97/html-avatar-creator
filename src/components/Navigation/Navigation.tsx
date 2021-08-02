import React from "react";
import NavigationToggle from "./NavigationToggle/NavigationToggle";
import NavigationList from "./NavigationList/NavigationList";
import { INavigation } from "./navigation.model";
import './Navigation.scss';

/**
 * The Navigation component is used to switch/jump between the skin parts.
 */
const Navigation: React.FC<INavigation> = (props) => {
  const { isOpen, navItems,  handleNavToggle } = props;

  return (
    <div className="navigation-container">
      <NavigationToggle isOpen={isOpen} handleNavToggle={handleNavToggle} />
      <NavigationList isOpen={isOpen} navItems={navItems} />
    </div>
  );
};

export default Navigation;
