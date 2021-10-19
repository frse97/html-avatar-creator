import React, { CSSProperties, memo } from "react";
import "./PlaygroundFace.scss";
import { IPlaygroundFaceProps } from "./PlaygroundFace.types";

export const PlaygroundFace: React.FC<IPlaygroundFaceProps> = (props) => {
  const { backgroundColor, formStyles } = props;

  const styles: CSSProperties = {
    backgroundColor: backgroundColor,
    ...formStyles,
  };

  return <div className="playground-face" style={styles}></div>;
};

export default memo(PlaygroundFace);
