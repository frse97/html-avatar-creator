import React, { memo } from "react";
import Icon from "../Icon";
import { INoseIcon } from "../Icon.types";
import "./Nose.scss";

const Nose: React.FC<INoseIcon> = (props) => (
  <Icon {...props}>
    <div className="nose-shape" />
    <div className="nostril-1" />
    <div className="nostril-2" />
  </Icon>
);

export default memo(Nose);
