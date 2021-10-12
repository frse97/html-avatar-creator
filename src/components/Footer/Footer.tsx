import React from "react";
import "./Footer.scss";

interface IFooter {}

const Footer: React.FC<IFooter> = (props) => {
  const { children } = props;

  return (
    <div className="hac-footer">
      <div className="hac-footer-main">
        <h4>HTML AVATAR CREATOR</h4>
      </div>
      <div className="hac-footer-copyright">Made by ©Sebastian Fries</div>
      <div className="hac-footer-theme">{children}</div>
    </div>
  );
};

export default Footer;
