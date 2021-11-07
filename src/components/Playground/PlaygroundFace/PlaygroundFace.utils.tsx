import React, { ChangeEvent } from "react";
import Oval from "../../Forms/Components/Oval";
import { IOval } from "../../Forms/Forms.model";
import { FaceFormType } from "./PlaygroundFace.types";

/**
 * Forms
 */

type IOvalFace = IOval;

const OvalFace: React.FC<IOvalFace> = (props) => {
  const { width, height, borderRadius, style } = props;

  return (
    <>
      <Oval
        width={width}
        height={height}
        borderRadius={borderRadius}
        style={style}
      />
    </>
  );
};

export function getFaceForm(form?: FaceFormType) {
  switch (form) {
    case FaceFormType.Oval:
      return (
        <OvalFace
          width={20}
          height={28}
          borderRadius={100}
          style={{ border: "2px solid black", background: "#fff" }}
        />
      );
  }
}

/**
 * Controls
 */
interface IFaceOvalControl {
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

const FaceOvalControl: React.FC<IFaceOvalControl> = (props) => {
  const {
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

  return (
    <div className="face-control-set">
      <div>
        <span>Width</span>
        <input
          value={width}
          id="width"
          type="number"
          step={10}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <span>Height</span>
        <input value={height} type="number" onChange={handleHeightChange} />
      </div>
      <div>
        <span>Border radius Top Left</span>
        <input
          value={borderRadiusTopLeft}
          type="number"
          step={10}
          onChange={handleTopLeftBorderRadius}
        />
      </div>
      <div>
        <span>Border radius Top Right</span>
        <input
          value={borderRadiusTopRight}
          type="number"
          step={10}
          onChange={handleTopRightBorderRadius}
        />
      </div>
      <div>
        <span>Border radius Bottom Left</span>
        <input
          value={borderRadiusBottomLeft}
          type="number"
          step={10}
          onChange={handleBottomLeftBorderRadius}
        />
      </div>
      <div>
        <span>Border radius Bottom Right</span>
        <input
          value={borderRadiusBottomRight}
          type="number"
          step={10}
          onChange={handleBottomRightBorderRadius}
        />
      </div>
    </div>
  );
};

export function getFaceControls(
  form: FaceFormType,
  width: string | number,
  height: string | number,
  borderRadiusTopLeft: string | number,
  borderRadiusTopRight: string | number,
  borderRadiusBottomLeft: string | number,
  borderRadiusBottomRight: string | number,
  handleWidthChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleHeightChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleBorderRadiusTopLeftChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleBorderRadiusTopRightChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleBorderRadiusBottomLeftChange: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void,
  handleBorderRadiusBottomRightChange: (
    ev: ChangeEvent<HTMLInputElement>
  ) => void
) {
  switch (form) {
    case FaceFormType.Oval:
      return (
        <FaceOvalControl
          width={width}
          height={height}
          borderRadiusTopLeft={borderRadiusTopLeft}
          borderRadiusTopRight={borderRadiusTopRight}
          borderRadiusBottomLeft={borderRadiusBottomLeft}
          borderRadiusBottomRight={borderRadiusBottomRight}
          handleWidthChange={handleWidthChange}
          handleHeightChange={handleHeightChange}
          handleTopLeftBorderRadius={handleBorderRadiusTopLeftChange}
          handleTopRightBorderRadius={handleBorderRadiusTopRightChange}
          handleBottomLeftBorderRadius={handleBorderRadiusBottomLeftChange}
          handleBottomRightBorderRadius={handleBorderRadiusBottomRightChange}
        />
      );
  }
}
