import React from "react";
import cs from 'classnames';
import NavigationListItem from "../NavigationListItem/NavigationListItem";
import { INavigationList } from "../navigation.model";
import { INavigationListItem } from "./../navigation.model";
import './NavigationList.scss';

const NavigationList: React.FC<INavigationList> = (props) => {
  const { isOpen, navItems } = props;

  const navListClassName = cs("navigation-list", {
    "--isnavopen": isOpen,
  })

  return (
    <ul className={navListClassName}>
      {navItems.map((item: INavigationListItem, i: number) => <NavigationListItem key={i} name={item.name} icon={item.icon} />)}
    </ul>
  );
};

export default NavigationList;
