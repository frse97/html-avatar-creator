import React, { memo } from 'react';
import Icon from '../Icon';
import { IAccessoryIcon } from '../Icon.types';
import './Accessory.scss';

const Accessory: React.FC<IAccessoryIcon> = (props) => (
  <Icon {...props}><div className="accessory" /></Icon>
);

export default memo(Accessory);