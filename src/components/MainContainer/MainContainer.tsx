import React from "react";
import "./MainContainer.scss";
import { IHasClassname, IHasStyles } from "./../../models/common.model";
import cs from "classnames";

interface IMainContainer extends IHasClassname, IHasStyles {}

/**
 * The Main Component to display the playground in which the avatar can be changed
 * @param props
 */
const MainContainer: React.FC<IMainContainer> = (props) => {
  const { className, style, children } = props;

  const classNames = cs("hac-main-container", className, {});

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default MainContainer;
