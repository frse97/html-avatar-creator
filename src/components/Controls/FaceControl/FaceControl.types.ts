import { ChangeEvent } from "react";
import { FaceFormType } from "../../Playground/PlaygroundFace/PlaygroundFace.types";

export interface IFaceControl {
  /**
   * The background color
   */
  backgroundColor: string;
  /**
   * A method to change background color
   */
  handleBackgroundColorChange: (
    ev: ChangeEvent<HTMLInputElement> | string
  ) => void;
  /**
   * The current selected form
   */
  form: FaceFormType;
  /**
   * A method to change form
   */
  handleCurrentFormChange: (form: FaceFormType) => void;
  /**
   * The current width
   */
  width: string | number;
  /**
   * A method to change width
   */
  handleWidthChange: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The current height
   */
  height: string | number;
  /**
   * A method to change height
   */
  handleHeightChange: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The current top left border radius
   */
  borderRadiusTopLeft: string | number;
  /**
   * A method to change top left border radius
   */
  handleTopLeftBorderRadius: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The current top right border radius
   */
  borderRadiusTopRight: string | number;
  /**
   * A method to change top right border radius
   */
  handleTopRightBorderRadius: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The current bottom left border radius
   */
  borderRadiusBottomLeft: string | number;
  /**
   * A method to change bottom left border radius
   */
  handleBottomLeftBorderRadius: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The current bottom right border radius
   */
  borderRadiusBottomRight: string | number;
  /**
   * A method to change bottom right border radius
   */
  handleBottomRightBorderRadius: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface IFaceColorInputControl {
  /**
   * The background color
   */
  backgroundColor: string;
  /**
   * A method to change background color
   */
   handleBackgroundColorChange: (
    ev: ChangeEvent<HTMLInputElement> | string
  ) => void;
}