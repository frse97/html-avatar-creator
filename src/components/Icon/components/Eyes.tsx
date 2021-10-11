import React, { memo } from "react";
import Icon from "../Icon";
import { IEyesIcon } from "../Icon.types";
import "./Eyes.scss";

const Eyes: React.FC<IEyesIcon> = (props) => (
  <Icon {...props}>
    <div className="outer">
      <div className="pupil" />
      <div className="iris" />
    </div>
  </Icon>
);

export default memo(Eyes);
