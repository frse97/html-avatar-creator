import React, { ChangeEvent, CSSProperties, memo } from "react";
import "./PlaygroundFace.scss";

enum FormTypes {
  oval = "oval",
  square = "square",
  arrowBottom = "arrowBottom",
  trapezium = "trapezium",
}

export interface IPlaygroundFace {
  /**
   * A value indicating the background color
   */
  readonly backgroundColor: string;
  /**
   * Handle background-color change
   */
  readonly handleBackgroundColorChange: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface IPlaygroundFaceProps {
  /**
   * The background-color of the face
   */
  backgroundColor?: string;
  /**
   * The current selected form
   */
  form?: FormTypes;
}

export const PlaygroundFace: React.FC<IPlaygroundFaceProps> = (props) => {
  const { backgroundColor } = props;

  const styles: CSSProperties = {
    backgroundColor: backgroundColor,
  };

  return <div className="playground-face" style={styles}></div>;
};

export default memo(PlaygroundFace);
