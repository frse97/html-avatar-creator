import React, { ChangeEvent, memo, useCallback } from "react";
import "./ColorSelection.scss";

interface IColorSelection {
  /**
   * The color to display
   */
  color: string;
  /**
   * A method handle when clicking
   */
  handleColorChange: (ev: ChangeEvent<HTMLInputElement> | string) => void;
}

const ColorSelection: React.FC<IColorSelection> = (props) => {
  const { color, handleColorChange } = props;

  const handleClick = useCallback(() => {
    handleColorChange(color);
  }, [color, handleColorChange]);

  return (
    <div
      className="color-selection"
      style={{ background: color }}
      onClick={handleClick}
    />
  );
};

export default memo(ColorSelection);
