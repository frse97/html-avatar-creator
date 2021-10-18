import React, { ChangeEvent, memo } from "react";
import ColorSelection from "../Generic/ColorSelection";
import "./FaceControl.scss";
import { useTranslation } from "react-i18next";
import FormSelection from "../Generic/FormSelection";

interface IFaceControl {
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

export const FaceControl: React.FC<IFaceControl> = (props) => {
  const { backgroundColor, handleBackgroundColorChange } = props;

  const { t } = useTranslation();

  return (
    <div className="face-control">
      <div className="face-color-control">
        <div className="title">
          <b>{t("face_control.change_color")}</b>
        </div>
        <div className="color-container">
          <ColorSelection
            color="#ffcdc8"
            selectedColor={backgroundColor}
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#ffb6ae"
            selectedColor={backgroundColor}
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#f2e2cd"
            selectedColor={backgroundColor}
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#e2bf90"
            selectedColor={backgroundColor}
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#927970"
            selectedColor={backgroundColor}
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#493c38"
            selectedColor={backgroundColor}
            handleColorChange={handleBackgroundColorChange}
          />
        </div>
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
      </div>
      <div className="face-form-control">
        <div className="title">
          <b>{t("face_control.change_form")}</b>
        </div>
        <div className="form-container">
          <div className="form-selection-container">
            <FormSelection scale={1} />
          </div>
          <div className="form-control"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(FaceControl);
