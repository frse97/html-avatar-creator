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