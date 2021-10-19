import React, { CSSProperties, memo, useCallback } from "react";
import cs from "classnames";
import { FaceFormType } from "../../Playground/PlaygroundFace/PlaygroundFace.types";
import "./FormSelection.scss";
import { getFaceForm } from "./../../Playground/PlaygroundFace/PlaygroundFace.utils";

interface IFormSelection {
  /**
   * The current selected form
   */
  selectedForm?: FaceFormType;
  /**
   * The form to display
   */
  form?: FaceFormType;
  /**
   * A method handle when clicking
   */
  handleFormChange?: (form: FaceFormType) => void;
}

const FormSelection: React.FC<IFormSelection> = (props) => {
  const { form, selectedForm, handleFormChange } = props;

  const classNames = cs("form-selection", {
    "is-selected": form === selectedForm,
  });

  const handleClick = useCallback(() => {
    if (handleFormChange && form) {
      handleFormChange(form);
    }
  }, [form, handleFormChange]);

  const formSelectionStyles: CSSProperties = {};

  return (
    <div
      className={classNames}
      onClick={handleClick}
      style={formSelectionStyles}
    >
      <div className="form-selection-content-container">
        {getFaceForm(form)}
      </div>
    </div>
  );
};

export default memo(FormSelection);
