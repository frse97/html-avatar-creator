import React, { memo } from "react";
import cs from "classnames";
import "./ThemeSwitch.scss";
import { IThemeSwichCommonProps, IThemeSwitch } from "./ThemeSwitch.types";
import { ITheme } from "../../../models/theme.model";
import Circle from "../../Forms/Components/Circle";
import Triangle from "../../Forms/Components/Triangle";

const SunIcon: React.FC<IThemeSwichCommonProps> = (props) => {
  const { onHandleThemeChange } = props;

  const offset = 2;
  const circleSize = {
    size: 30,
    borderSize: 6,
  };
  const triangleSize = {
    width: 10,
    height: 16,
    bgColor: "black",
  };

  return (
    <div className="hac-theme-sun" onClick={onHandleThemeChange}>
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: -circleSize.borderSize + offset,
          left: circleSize.size + circleSize.borderSize - triangleSize.height,
          transform: "rotate(0deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: circleSize.borderSize - offset,
          left: circleSize.size + triangleSize.width,
          transform: "rotate(45deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: 22,
          left: 46,
          transform: "rotate(90deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: 40,
          left: 38,
          transform: "rotate(135deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: 48,
          left: circleSize.size + circleSize.borderSize - triangleSize.height,
          transform: "rotate(180deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          transform: "rotate(225deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: 22,
          left: -6,
          transform: "rotate(270deg)",
        }}
      />
      <Triangle
        width={triangleSize.width}
        height={triangleSize.height}
        bgColor={triangleSize.bgColor}
        style={{
          position: "absolute",
          top: 4,
          left: 0,
          transform: "rotate(315deg)",
        }}
      />
      <Circle
        size={30}
        bgColor={"black"}
        style={{
          position: "absolute",
          zIndex: 10,
          top: "9px",
          left: "9px",
          border: "6px solid white",
        }}
      />
    </div>
  );
};

const MoonIcon: React.FC<IThemeSwichCommonProps> = (props) => {
  const { onHandleThemeChange } = props;

  return <div className="hac-theme-moon" onClick={onHandleThemeChange} />;
};

const ThemeSwitchIcon: React.FC<IThemeSwichCommonProps> = (props) => {
  const { onHandleThemeChange } = props;
  return (
    <div className="hac-theme-switch-icon">
      <SunIcon onHandleThemeChange={onHandleThemeChange} />
      <MoonIcon onHandleThemeChange={onHandleThemeChange} />
    </div>
  );
};

/**
 * A component to switch the theme state beetween light /darkmode
 */
const ThemeSwitch: React.FC<IThemeSwitch> = (props) => {
  const { current, onHandleThemeChange } = props;

  const classNames = cs("hac-theme-switch", {
    "is-light": current === ITheme.dark,
    "is-dark": current === ITheme.light,
  });

  return (
    <div className={classNames}>
      <ThemeSwitchIcon onHandleThemeChange={onHandleThemeChange} />
    </div>
  );
};

export default memo(ThemeSwitch);
