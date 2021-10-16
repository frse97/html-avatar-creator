import React, { ChangeEvent, memo } from "react";
import ColorSelection from "../Generic/ColorSelection";
import "./FaceControl.scss";

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

  return (
    <div className="face-control">
      <div className="face-color-control">
        <div className="title">
          <b>Change color</b>
        </div>
        <div className="color-container">
          <ColorSelection
            color="#ffcdc8"
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#ffb6ae"
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#f4cabc"
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#dbb5a9"
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#927970"
            handleColorChange={handleBackgroundColorChange}
          />
          <ColorSelection
            color="#493c38"
            handleColorChange={handleBackgroundColorChange}
          />
          <input
            className="custom-color"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        <div className="custom-color-input">
          <span>Change to edit: (rgba, hex, text)</span>
          <input
            type="text"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
      </div>
      <div className="face-form-control">
        <div className="title">
          <b>Change form</b>
        </div>
      </div>
    </div>
  );
};

export default memo(FaceControl);
