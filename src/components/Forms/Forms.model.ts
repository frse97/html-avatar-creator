import { IHasClassname, IHasStyles } from "../../models/common.model";

export interface ICircle extends IHasClassname, IHasStyles, Omit<ICommonFormsProps, 'borderRadius'> {
  /**
   * The size of the circle in px
   */
  size: number;
}

export interface IOval extends IHasClassname, IHasStyles, ICommonFormsProps {
  /**
   * The width of the oval
   */
  width: number;
  /**
   * The height of the oval
   */
  height: number;
}

export interface ISquare extends IHasClassname, IHasStyles, ICommonFormsProps {
  /**
   * The size of the square in px
   */
  size: number;
}

export interface IRectangle extends IHasClassname, IHasStyles, ICommonFormsProps {
  /**
   * The width of the rectangle
   */
  width: number;
  /**
   * The height of the rectangle
   */
  height: number;
}

export type TriangleDirection = 'up' | 'down' | 'right' | 'left';

export interface ITriangle extends IHasClassname, IHasStyles, ICommonFormsProps {
  /**
   * The width of the rectangle
   */
  width: number;
  /**
   * The height of the rectangle
   */
  height: number;
  /**
   * The direction of the triangle
   */
  direction?: TriangleDirection,
}

export interface IPosition {
  /**
   * The top position
   */
  top?: number;
  /**
   * The left position
   */
  left?: number;
  /**
   * The right position
   */
  right?: number;
  /**
   * The bottom position
   */
  bottom?: number;
}

export interface IBorderRadius {
  /**
   * Border top left radius
   */
  topLeft?: number | string;
  /**
   * Border top right radius
   */
  topRight?: number | string;
  /**
   * Border bottom left radius
   */
  bottomLeft: number | string;
  /**
   * Border bottom right radius
   */
  bottomRight?: number | string;
}

interface ICommonFormsProps {
  /**
   * The background-color of the item
   */
  bgColor?: string;
  /**
   * The border-radius of the item
   */
  borderRadius?: number | string | IBorderRadius;
  /**
   * The position of the item
   */
  position?: IPosition;
  /**
   * The scalefactor of the item
   */
  scale?: number;
  /**
   * The rotation factor of the item
   */
  rotation?: number;
}
