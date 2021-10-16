import React, { ChangeEvent, CSSProperties, memo } from "react";
import "./PlaygroundFace.scss";

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
}

export const PlaygroundFace: React.FC<IPlaygroundFaceProps> = (props) => {
  const { backgroundColor } = props;

  console.log("back", backgroundColor);

  const styles: CSSProperties = {
    backgroundColor: backgroundColor,
  };

  return <div className="playground-face" style={styles}></div>;
};

export default memo(PlaygroundFace);
