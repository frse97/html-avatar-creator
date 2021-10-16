import React from "react";
import { IHasClassname, IHasStyles } from "../../models/common.model";
import "./Playground.scss";

interface IPlayGround extends IHasClassname, IHasStyles {}

/**
 * The playground used to interact with the generated avatar
 * @param props
 */
export const Playground: React.FC<IPlayGround> = (props) => {
  const { children } = props;

  return <div className="hac-main-playground">{children}</div>;
};

export default Playground;
