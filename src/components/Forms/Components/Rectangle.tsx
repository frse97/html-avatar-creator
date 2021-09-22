import React, { CSSProperties, memo } from 'react';
import cs from 'classnames';
import { toRem } from '../../../utils/forms.utils';
import '../Forms.scss';
import { IRectangle } from '../Forms.model';
import { getCommonStyles } from '../Forms.utils';

const Rectangle: React.FC<IRectangle> = props => {
  const { className, borderRadius, bgColor, height, position, scale, rotation, style, width } = props;

  const classNames = cs('form', 'form-rectangle', className);

  const RectangleStyle: CSSProperties = {
    width: toRem(width),
    height: toRem(height),
    ...getCommonStyles(bgColor, borderRadius, position, scale, rotation),
    ...style
  }

  return <div className={classNames} style={RectangleStyle} />
}

Rectangle.defaultProps = {
  scale: 1,
}

export default memo(Rectangle);
