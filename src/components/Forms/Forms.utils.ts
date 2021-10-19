import { CSSProperties } from "react";
import { IBorderRadius, IPosition, TriangleDirection } from "./Forms.model";
import { toRem } from "./../../utils/forms.utils";

/**
 * A utility function to generate border-radius-styles
 */
function getBorderRadiusStyles(borderRadius?: number | string | IBorderRadius): CSSProperties | undefined {
  let borderRadiusStyles: CSSProperties;
  if(borderRadius){
    if(typeof borderRadius === 'string'){
      borderRadiusStyles = {
        borderRadius: `${borderRadius}rem`,
      };
      return borderRadiusStyles;
    }
    if(typeof borderRadius === 'number'){
      borderRadiusStyles = {
        borderRadius: `${borderRadius}%`,
      }
      return borderRadiusStyles;
    }
    borderRadiusStyles = {
      borderTopLeftRadius: `${borderRadius.topLeft}rem`,
      borderTopRightRadius: `${borderRadius.topRight}rem`,
      borderBottomLeftRadius: `${borderRadius.bottomLeft}rem`,
      borderBottomRightRadius: `${borderRadius.bottomRight}rem`,
    }
    return borderRadiusStyles;
  }
  return undefined;
}

/**
 * A utility function to generate styles
 */
export function getCommonStyles(
  bgColor?: string,
  borderRadius?: number | string | IBorderRadius,
  position?: IPosition,
  scale?: number,
  rotation?: number
): CSSProperties {
  const commonStyles: CSSProperties = {
    backgroundColor: bgColor,
    ...getBorderRadiusStyles(borderRadius),
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
