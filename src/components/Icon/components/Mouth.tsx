import React, { memo } from "react";
import Icon from "../Icon";
import { IMouthIcon } from "../Icon.types";
import "./Mouth.scss";

const Mouth: React.FC<IMouthIcon> = (props) => (
  <Icon {...props}>
    <div className="mouth-shape">
      <div className="teeth1"/>
      <div className="teeth2"/>
      <div className="teeth3"/>
      <div className="teeth4"/>
      <div className="tongue1" />
      <div className="tongue2" />
    </div>
  </Icon>
);

export default memo(Mouth);
