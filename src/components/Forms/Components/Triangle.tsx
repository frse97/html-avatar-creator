import React, { CSSProperties, memo } from 'react';
import cs from 'classnames';
import '../Forms.scss';
import { ITriangle } from '../Forms.model';
import { getCommonStyles, getTriangleDirection } from '../Forms.utils';

const Triangle: React.FC<ITriangle> = props => {
  const { className, borderRadius, bgColor, direction, height, position, scale, rotation, style, width } = props;

  const classNames = cs('form', 'form-triangle', className);

  const TriangleStyle: CSSProperties = {
    width: 0,
    height: 0,
    ...getTriangleDirection(width, height, bgColor, direction),
    ...getCommonStyles(undefined, borderRadius, position, scale, rotation),
    ...style
  }

  return <div className={classNames} style={TriangleStyle} />
}

Triangle.defaultProps = {
  direction: 'up',
  scale: 1,
}

export default memo(Triangle);
