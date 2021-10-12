import React, { memo } from "react";
import Icon from "../Icon";
import { IBodyIcon } from "../Icon.types";
import "./Body.scss";

const Body: React.FC<IBodyIcon> = (props) => (
  <Icon {...props}>
    <div className="body-head" />
    <div className="body-leftarm" />
    <div className="body-rightarm" />
    <div className="body-main" />
    <div className="body-leftfoot" />
    <div className="body-rightfoot" />
  </Icon>
);

export default memo(Body);
