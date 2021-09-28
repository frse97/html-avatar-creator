import React from "react";
import NavigationToggle from "./NavigationToggle/NavigationToggle";
import NavigationList from "./NavigationList/NavigationList";
import { INavigation } from "./navigation.model";
import './Navigation.scss';

/**
 * The Navigation component is used to switch/jump between the skin parts.
 */
const Navigation: React.FC<INavigation> = (props) => {
  const { isOpen, navItems, selected, handleNavToggle, handleNavItemClick } = props;

  return (
    <div className="navigation-container">
      <NavigationToggle isOpen={isOpen} handleNavToggle={handleNavToggle} />
      <NavigationList selected={selected} isOpen={isOpen} navItems={navItems} handleNavItemClick={handleNavItemClick} />
    </div>
  );
};

export default Navigation;
