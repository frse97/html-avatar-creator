import React, { memo } from 'react';
import Icon from '../Icon';
import { IBodyIcon } from '../Icon.types';
import './Body.scss';

const Body: React.FC<IBodyIcon> = (props) => (
  <Icon {...props}><div className="body-shape" /></Icon>
);

export default memo(Body);