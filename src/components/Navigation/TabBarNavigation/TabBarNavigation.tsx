import React, { ReactNode } from "react";
import cs from "classnames";
import { ITabBarNavigation } from "./TabBarNavigation.types";
import "./TabBarNavigation.scss";
import { INavigationListItem } from "./../navigation.model";

/**
 * The tabbar navigation to switch beetween the different body-parts
 */
const TabBarNavigation: React.FC<ITabBarNavigation> = (props) => {
  const { selected, navItems } = props;

  const classNames = cs("hac-tabbar-nav");
  const selectedItem = navItems.filter((item: INavigationListItem) => item.key === selected)[0];
  console.log('SELECTED ITEM', selectedItem);

  return (
    <div className={classNames}>
      <div className="hac-tabbar-nav-container">
        <div className="hac-tabbar-nav-item">
          <span className="hac-tabbar-nav-item-title">{selectedItem.name}</span>
        </div>
      </div>
      <div className="hac-tabbar-nav-content"></div>
    </div>
  );
};

export default TabBarNavigation;
