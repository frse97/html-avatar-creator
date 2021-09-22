import React, { CSSProperties, memo } from 'react';
import cs from 'classnames';
import { toRem } from '../../../utils/forms.utils';
import '../Forms.scss';
import { ISquare } from '../Forms.model';
import { getCommonStyles } from '../Forms.utils';

const Square: React.FC<ISquare> = props => {
  const { className, borderRadius, bgColor, position, size, scale, rotation, style } = props;

  const classNames = cs('form', 'form-square', className);

  const SquareStyle: CSSProperties = {
    width: toRem(size),
    height: toRem(size),
    ...getCommonStyles(bgColor, borderRadius, position, scale, rotation),
    ...style
  }

  return <div className={classNames} style={SquareStyle} />
}

Square.defaultProps = {
  scale: 1,
}

export default memo(Square);
