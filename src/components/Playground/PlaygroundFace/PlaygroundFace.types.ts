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
   * The width of the face
   */
  width?: string | number;
  /**
   * The height of the face
   */
  height?: string | number;
  /**
   * The top left border radius
   */
  borderRadiusTopLeft?: string | number;
  /**
   * The top right border radius
   */
  borderRadiusTopRight?: string | number ;
  /**
   * The bottom left border radius
   */
  borderRadiusBottomLeft?: string | number;
  /**
   * The bottom right border radius
   */
  borderRadiusBottomRight?: string | number;
  /**
   * The background-color of the face
   */
  backgroundColor?: string;
  /**
   * The current selected form
   */
  formStyles?: CSSProperties;
}