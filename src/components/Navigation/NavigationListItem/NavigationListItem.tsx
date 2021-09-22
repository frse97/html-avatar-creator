import React from "react";
import { INavigationListItem } from "../navigation.model";
import './NavigationListItem.scss';

const NavigationListItem: React.FC<INavigationListItem> = (props) => {
  const { name, icon } = props;

  return (
    <div className="navigation-list-item">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default NavigationListItem;
