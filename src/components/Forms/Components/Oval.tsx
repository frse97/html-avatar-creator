import React, { CSSProperties, memo } from 'react';
import cs from 'classnames';
import { toRem } from '../../../utils/forms.utils';
import '../Forms.scss';
import { IOval } from '../Forms.model';
import { getCommonStyles } from '../Forms.utils';

const Oval: React.FC<IOval> = props => {
  const { className, bgColor, position, width, height, scale, rotation, style } = props;

  const classNames = cs('form', 'form-oval', className);

  const OvalStyle: CSSProperties = {
    width: toRem(width),
    height: toRem(height),
    ...getCommonStyles(bgColor, 100, position, scale, rotation),
    ...style
  }

  return <div className={classNames} style={OvalStyle} />
}

Oval.defaultProps = {
  scale: 1,
}

export default memo(Oval);
