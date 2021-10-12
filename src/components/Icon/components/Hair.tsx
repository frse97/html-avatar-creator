import React, { memo } from "react";
import Icon from "../Icon";
import { IHairIcon } from "../Icon.types";
import "./Hair.scss";

const Hair: React.FC<IHairIcon> = (props) => (
  <Icon {...props}>
    <div className="hair-face" />
    <div className="hair-form1" />
    <div className="hair-form2" />
  </Icon>
);

export default memo(Hair);
