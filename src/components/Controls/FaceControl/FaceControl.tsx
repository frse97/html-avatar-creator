import React, { memo } from "react";
import ColorSelection from "../Generic/ColorSelection";
import "./FaceControl.scss";
import { useTranslation } from "react-i18next";
import FormSelection from "../Generic/FormSelection";
import { IFaceColorInputControl, IFaceControl } from "./FaceControl.types";
import { FaceFormType } from "../../Playground/PlaygroundFace/PlaygroundFace.types";
import FormSelectionControl from "../Generic/FormSelectionControl";

const FaceColorInputControl: React.FC<IFaceColorInputControl> = (props) => {
  const { backgroundColor, handleBackgroundColorChange } = props;
  const { t } = useTranslation();

  return (
    <div className="custom-color-input">
      <span>{t("face_control.select_custom_color")}</span>
      <div className="custom-color-input-container">
        <input
          className="custom-color"
          type="color"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
        <input
          className="custom-input"
          type="text"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </div>
    </div>
  );
};

export const FaceControl: React.FC<IFaceControl> = (props) => {
  const {
    backgroundColor,
    handleBackgroundColorChange,
    form,
    handleCurrentFormChange,
    width,
    handleWidthChange,
    height,
    handleHeightChange,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    handleTopLeftBorderRadius,
    handleTopRightBorderRadius,
    handleBottomLeftBorderRadius,
    handleBottomRightBorderRadius,
  } = props;

  const { t } = useTranslation();
  // List used to display the color selection
  const faceColorSelection: string[] = [
    "#ffcdc8",
    "#ffb6ae",
    "#f2e2cd",
    "#e2bf90",
    "#927970",
    "#493c38",
  ];

  return (
    <div className="face-control">
      <div className="face-color-control">
        <div className="title">
          <b>{t("face_control.change_color")}</b>
        </div>
        <div className="color-container">
          {faceColorSelection.map((color: string, i: number) => {
            return (
              <ColorSelection
                key={`color-selection-${i}`}
                color={color}
                selectedColor={backgroundColor}
                handleColorChange={handleBackgroundColorChange}
              />
            );
          })}
        </div>
        <FaceColorInputControl
          backgroundColor={backgroundColor}
          handleBackgroundColorChange={handleBackgroundColorChange}
        />
      </div>
      <div className="face-form-control">
        <div className="title">
          <b>{t("face_control.change_form")}</b>
        </div>
        <div className="form-container">
          <div className="form-selection-container">
            {Object.values(FaceFormType).map((f) => {
              return (
                <FormSelection
                  selectedForm={form}
                  form={f}
                  handleFormChange={handleCurrentFormChange}
                />
              );
            })}
          </div>
          <FormSelectionControl
            selectedForm={form}
            width={width}
            height={height}
            borderRadiusTopLeft={borderRadiusTopLeft}
            borderRadiusTopRight={borderRadiusTopRight}
            borderRadiusBottomLeft={borderRadiusBottomLeft}
            borderRadiusBottomRight={borderRadiusBottomRight}
            handleWidthChange={handleWidthChange}
            handleHeightChange={handleHeightChange}
            handleTopLeftBorderRadius={handleTopLeftBorderRadius}
            handleTopRightBorderRadius={handleTopRightBorderRadius}
            handleBottomLeftBorderRadius={handleBottomLeftBorderRadius}
            handleBottomRightBorderRadius={handleBottomRightBorderRadius}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(FaceControl);
