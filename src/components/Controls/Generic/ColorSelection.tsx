import React, { ChangeEvent, memo, useCallback } from "react";
import cs from "classnames";
import "./ColorSelection.scss";

interface IColorSelection {
  /**
   * The color to display
   */
  color: string;
  /**
   * The current selected color
   */
  selectedColor: string;
  /**
   * A method handle when clicking
   */
  handleColorChange: (ev: ChangeEvent<HTMLInputElement> | string) => void;
}

const ColorSelection: React.FC<IColorSelection> = (props) => {
  const { color, selectedColor, handleColorChange } = props;

  const handleClick = useCallback(() => {
    handleColorChange(color);
  }, [color, handleColorChange]);

  const className = cs("color-selection", {
    "is-selected": color === selectedColor,
  });

  return (
    <div
      className={className}
      style={{ background: color }}
      onClick={handleClick}
    />
  );
};

export default memo(ColorSelection);
