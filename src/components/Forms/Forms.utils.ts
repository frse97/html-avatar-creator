import { CSSProperties } from "react";
import { IBorderRadius, IPosition, TriangleDirection } from "./Forms.model";
import { toRem } from "./../../utils/forms.utils";

/**
 * A utility function to generate styles
 */
export function getCommonStyles(
  bgColor?: string,
  borderRadius?: number | IBorderRadius,
  position?: IPosition,
  scale?: number,
  rotation?: number
): CSSProperties {
  const commonStyles: CSSProperties = {
    backgroundColor: bgColor,
    borderRadius: `${borderRadius}%`,
    top: toRem(position?.top),
    right: toRem(position?.right),
    bottom: toRem(position?.bottom),
    left: toRem(position?.left),
    transform: `scale(${scale}) rotate(${rotation}deg)`,
  };
  return commonStyles;
}

/**
 * A utility function to generate the proper styles for triangle direction
 */
export function getTriangleDirection(
  width: number,
  height: number,
  bgColor?: string,
  direction?: TriangleDirection
) {
  let triangleDirectionStyles: CSSProperties = {};
  switch (direction) {
    case "up":
      triangleDirectionStyles = {
        borderLeft: `${toRem(width)} solid transparent`,
        borderRight: `${toRem(width)} solid transparent`,
        borderBottom: `${toRem(height)} solid ${bgColor}`,
      };
      break;
    case "down":
      triangleDirectionStyles = {
        borderLeft: `${toRem(width)} solid transparent`,
        borderRight: `${toRem(width)} solid transparent`,
        borderTop: `${toRem(height)} solid ${bgColor}`,
      };
      break;
    case "right":
      triangleDirectionStyles = {
        borderTop: `${toRem(width)} solid transparent`,
        borderBottom: `${toRem(width)} solid transparent`,
        borderLeft: `${toRem(height)} solid ${bgColor}`,
      };
      break;
    case "left":
      triangleDirectionStyles = {
        borderTop: `${toRem(width)} solid transparent`,
        borderBottom: `${toRem(width)} solid transparent`,
        borderRight: `${toRem(height)} solid ${bgColor}`,
      };
      break;
  }
  return triangleDirectionStyles;
}
