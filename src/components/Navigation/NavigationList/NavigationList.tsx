import React from "react";
import cs from 'classnames';
import NavigationListItem from "../NavigationListItem/NavigationListItem";
import { INavigationList } from "../navigation.model";
import { INavigationListItem } from "./../navigation.model";
import './NavigationList.scss';

const NavigationList: React.FC<INavigationList> = (props) => {
  const { isOpen, navItems, selected, handleNavItemClick } = props;

  const navListClassName = cs("navigation-list", {
    "--isnavopen": isOpen,
  })

  return (
    <ul className={navListClassName}>
      {navItems.map((item: INavigationListItem, i: number) => {

        function handleClick () {
          handleNavItemClick(item.key);
        }

        return <NavigationListItem key={item.key} name={item.name} icon={item.icon} isSelected={item.key === selected} onHandleClick={handleClick} />
      })}
    </ul>
  );
};

export default NavigationList;
