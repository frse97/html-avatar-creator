import React, { CSSProperties, memo, useCallback } from "react";
import "./FormSelection.scss";

interface IFormSelection {
  /**
   * The form to display
   */
  form?: React.ReactNode;
  /**
   * The scaling factor of the form
   */
  scale?: number;
  /**
   * A method handle when clicking
   */
  handleFormChange?: () => void;
}

const FormSelection: React.FC<IFormSelection> = (props) => {
  const { form, scale, handleFormChange } = props;

  const handleClick = useCallback(() => {
    if (handleFormChange) {
      handleFormChange();
    }
  }, [handleFormChange]);

  const formSelectionStyles: CSSProperties = {
    transform: `scale(${scale})`,
  };

  return (
    <div
      className="form-selection"
      onClick={handleClick}
      style={formSelectionStyles}
    >
      {form}
    </div>
  );
};

export default memo(FormSelection);
