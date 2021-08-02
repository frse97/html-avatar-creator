import React, { useCallback, useState } from "react";
import cs from 'classnames';
import './Navigation.scss';

interface INavigation {
  /**
   * A flag indicating if the navigation is open
   */
  isOpen: boolean;
  /**
   * A method to toggle the navigation
   */
  handleNavToggle: () => void;
}

interface INavigationToggle {
  /**
   * A flag indicating if the navigation is open
   */
   isOpen: boolean;
  /**
   * A method to toggle the navigation
   */
  handleNavToggle: () => void;
}

/**
 * The Navigation component is used to switch/jump between the skin parts.
 */
const Navigation: React.FC<INavigation> = (props) => {
  const { isOpen, handleNavToggle } = props;

  return (
    <div className="navigation-container">
      <NavigationToggle isOpen={isOpen} handleNavToggle={handleNavToggle} />
    </div>
  );
};

const NavigationToggle: React.FC<INavigationToggle> = (props) => {
  const { isOpen, handleNavToggle } = props;

  const classNames = cs("navigation-toggle", isOpen && '--isopen');

  return <button className={classNames} onClick={handleNavToggle}>
    <div className="line" />
  </button>;
};

export default Navigation;
