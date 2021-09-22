import React, { CSSProperties, memo } from 'react';
import cs from 'classnames';
import { toRem } from '../../../utils/forms.utils';
import '../Forms.scss';
import { ICircle } from '../Forms.model';
import { getCommonStyles } from '../Forms.utils';

const Circle: React.FC<ICircle> = props => {
  const { className, size, bgColor, position, scale, rotation, style } = props;

  const classNames = cs('form', 'form-circle', className);

  const circleStyle: CSSProperties = {
    width: toRem(size),
    height: toRem(size),
    ...getCommonStyles(bgColor, 100, position, scale, rotation),
    ...style
  }

  return <div className={classNames} style={circleStyle} />
}

Circle.defaultProps = {
  scale: 1,
}

export default memo(Circle);
