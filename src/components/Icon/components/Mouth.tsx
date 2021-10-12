import React, { memo } from "react";
import Icon from "../Icon";
import { IMouthIcon } from "../Icon.types";
import "./Mouth.scss";

const Mouth: React.FC<IMouthIcon> = (props) => (
  <Icon {...props}>
    <div className="mouth-shape">
      <div className="teeth"/>
      <div className="tongue" />
    </div>
  </Icon>
);

export default memo(Mouth);
