import React, { ChangeEvent, memo } from "react";
import cs from "classnames";
import { FaceFormType } from "../../Playground/PlaygroundFace/PlaygroundFace.types";
import "./FormSelectionControl.scss";
import { getFaceControls } from "./../../Playground/PlaygroundFace/PlaygroundFace.utils";

interface IFormSelectionControl {
  /**
   * The current selected form
   */
  selectedForm?: FaceFormType;
  /**
   * The current width
   */
  width: string | number;
  /**
   * A method to change width
   */
  handleWidthChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The current height
   */
  height: string | number;
  /**
   * A method to change height
   */
  handleHeightChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The current top left border radius
   */
  borderRadiusTopLeft: string | number;
  /**
   * A method to change top left border radius
   */
  handleTopLeftBorderRadius: (ev: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The current top right border radius
   */
  borderRadiusTopRight: string | number;
  /**
   * A method to change top right border radius
   */
  handleTopRightBorderRadius: (ev: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The current bottom left border radius
   */
  borderRadiusBottomLeft: string | number;
  /**
   * A method to change bottom left border radius
   */
  handleBottomLeftBorderRadius: (ev: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The current bottom right border radius
   */
  borderRadiusBottomRight: string | number;
  /**
   * A method to change bottom right border radius
   */
  handleBottomRightBorderRadius: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const FormSelectionControl: React.FC<IFormSelectionControl> = (props) => {
  const {
    selectedForm,
    width,
    height,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    handleWidthChange,
    handleHeightChange,
    handleTopLeftBorderRadius,
    handleTopRightBorderRadius,
    handleBottomLeftBorderRadius,
    handleBottomRightBorderRadius,
  } = props;

  const classNames = cs("form-selection-control", {});

  return (
    <div className={classNames}>
      <div className="form-selection-content-container">
        {selectedForm &&
          getFaceControls(
            selectedForm,
            width,
            height,
            borderRadiusTopLeft,
            borderRadiusTopRight,
            borderRadiusBottomLeft,
            borderRadiusBottomRight,
            handleWidthChange,
            handleHeightChange,
            handleTopLeftBorderRadius,
            handleTopRightBorderRadius,
            handleBottomLeftBorderRadius,
            handleBottomRightBorderRadius
          )}
        l
      </div>
    </div>
  );
};

export default memo(FormSelectionControl);
