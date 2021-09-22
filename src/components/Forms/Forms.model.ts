import { IHasClassname, IHasStyles } from "../../models/common.model";

export interface ICircle extends IHasClassname, IHasStyles, Omit<ICommonForms, 'borderRadius'> {
  /**
   * The size of the circle in px
   */
  size: number;
}

export interface IOval extends IHasClassname, IHasStyles, Omit<ICommonForms, 'borderRadius'> {
  /**
   * The width of the oval
   */
  width: number;
  /**
   * The height of the oval
   */
  height: number;
}

export interface ISquare extends IHasClassname, IHasStyles, ICommonForms {
  /**
   * The size of the square in px
   */
  size: number;
  /**
   * The border-radius of the square in %
   * @default undefined
   */
  borderRadius?: number;
}

export interface IRectangle extends IHasClassname, IHasStyles, ICommonForms {
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

export interface ITriangle extends IHasClassname, IHasStyles, ICommonForms {
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
  topLeft?: number;
  /**
   * Border top right radius
   */
  topRight?: number;
  /**
   * Border bottom left radius
   */
  bottomLeft: number;
  /**
   * Border bottom right radius
   */
  bottomRight?: number;
}

interface ICommonForms {
  /**
   * The background-color of the item
   */
  bgColor?: string;
  /**
   * The border-radius of the item
   */
  borderRadius?: number | IBorderRadius;
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
