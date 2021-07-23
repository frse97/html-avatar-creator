import React from 'react';
import { Logo } from '..';
import './Header.scss';

interface IHeader {

}

const Header: React.FC<IHeader> = () => {

  return <header className="hac-header">
    <span>HTML</span>
    <Logo />
    <span>Creator</span>
  </header>
}

export default Header;