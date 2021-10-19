import { ChangeEvent, CSSProperties } from "react";

export enum FaceFormType {
  Oval = "Oval",
  Square = "Square",
  ArrowBottom = "ArrowBottom",
  ArrowBottomCircleTop = "ArrowBottomCircleTop",
  Trapezium = "Trapezium",
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
  formStyles?: CSSProperties;
}