import React, { memo } from "react";
import Icon from "../Icon";
import { IAccessoryIcon } from "../Icon.types";
import "./Accessory.scss";

const Accessory: React.FC<IAccessoryIcon> = (props) => (
  <Icon {...props}>
    <div className="glasses">
      <div className="left-eye">
        <div className="glow"/>
      </div>
      <div className="right-eye">
        <div className="glow" />
      </div>
      <div className="line" />
    </div>
  </Icon>
);

export default memo(Accessory);
