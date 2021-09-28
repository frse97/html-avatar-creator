import React from "react";
import cs from 'classnames';
import { INavigationListItem } from "../navigation.model";
import './NavigationListItem.scss';

const NavigationListItem: React.FC<INavigationListItem> = (props) => {
  const { name, icon, isSelected, onHandleClick } = props;

  const classNames = cs('navigation-list-item', {
    'is-selected': isSelected,
  })

  return (
    <div className={classNames} onClick={onHandleClick}>
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default NavigationListItem;
