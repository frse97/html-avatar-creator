import React from 'react';
import { Logo } from '..';
import './Header.scss';

interface IHeader {

}

const Header: React.FC<IHeader> = props => {
  const { children } = props;

  return <header className="hac-header">
    <span>HTML</span>
    <Logo />
    <span>Creator</span>
    {children}
  </header>
}

export default Header;