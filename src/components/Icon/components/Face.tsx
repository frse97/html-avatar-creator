import React, { memo } from 'react';
import Icon from '../Icon';
import { IFaceIcon } from '../Icon.types';
import './Face.scss';

const Face: React.FC<IFaceIcon> = (props) => (
  <Icon {...props}>
    <div className="face" />
    <div className="body" />
  </Icon>
);

export default memo(Face);