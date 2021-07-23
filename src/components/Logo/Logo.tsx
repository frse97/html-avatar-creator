import React from "react";
import './Logo.scss';

interface ILogo {}

const Logo: React.FC<ILogo> = () => {
  return (
    <div className="hac-logo">
      <div className="hac-logo-head">
        <div className="hac-logo-eye" />
      </div>
      <div className="hac-logo-neck" />
      <div className="hac-logo-body" />
    </div>
  );
};

export default Logo;
