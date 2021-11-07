import React, { CSSProperties } from "react";
import "./PlaygroundFace.scss";
import { IPlaygroundFaceProps } from "./PlaygroundFace.types";

export const PlaygroundFace: React.FC<IPlaygroundFaceProps> = (props) => {
  const {
    width,
    height,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    backgroundColor,
    formStyles,
  } = props;

  const styles: CSSProperties = {
    backgroundColor: backgroundColor,
    width: `${width}px`,
    height: `${height}px`,
    borderTopLeftRadius: `${borderRadiusTopLeft}%`,
    borderTopRightRadius: `${borderRadiusTopRight}%`,
    borderBottomLeftRadius: `${borderRadiusBottomLeft}%`,
    borderBottomRightRadius: `${borderRadiusBottomRight}%`,
    ...formStyles,
  };

  console.log("Playground WIDTH", width);
  return <div className="playground-face" style={styles}></div>;
};

export default PlaygroundFace;
