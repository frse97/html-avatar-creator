import React from "react";
import Oval from "../../Forms/Components/Oval";
import { IOval } from "../../Forms/Forms.model";
import { FaceFormType } from "./PlaygroundFace.types";

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
          width={24}
          height={32}
          borderRadius={100}
          style={{ border: "2px solid black", background: "#fff" }}
        />
      );
  }
}
