import React, { memo } from "react";
import cs from "classnames";
import "./ThemeSwitch.scss";
import { IThemeSwitch } from "./ThemeSwitch.types";
import { ITheme } from "../../../models/theme.model";
import Circle from "../../Forms/Components/Circle";
import Triangle from "../../Forms/Components/Triangle";
import { abort } from "process";

interface IThemeSwichIconProps {
  /**
   * The handler for changing theme
   */
  onHandleTheme?: () => void;
}

const ThemeSwitchIcon: React.FC<IThemeSwichIconProps> = props => {
  const { onHandleTheme } = props;

  return (
    <div className="hac-theme-switch-icon">
      <div className="hac-theme-sun" onClick={onHandleTheme}>
        <Triangle
          width={12}
          height={20}
          bgColor={"black"}
          style={{
            position: "absolute",
            top: "-15px",
            left: "9px",
            transform: "rotate(-6deg)"
          }}
        />
        <Circle
          size={30}
          bgColor={"black"}
          style={{ position: "absolute", top: "9px", left: "9px" }}
        />
        <Triangle
          width={12}
          height={20}
          bgColor={"black"}
          style={{
            position: "absolute",
            top: "-4px",
            left: "36px",
            transform: "rotate(52deg)"
          }}
        />
        <Triangle
          width={12}
          height={20}
          bgColor={"black"}
          style={{
            position: "absolute",
            top: "24px",
            left: "40px",
            transform: "rotate(112deg)"
          }}
        />
        <Triangle
          width={12}
          height={20}
          bgColor={"black"}
          style={{
            position: "absolute",
            top: "43x",
            left: "15px",
            transform: "rotate(173deg)"
          }}
        />
        <Triangle
          width={12}
          height={20}
          bgColor={"black"}
          style={{
            position: "absolute",
            top: "31px",
            left: "-7px",
            transform: "rotate(112deg)"
          }}
        />
        <Triangle
          width={12}
          height={20}
          bgColor={"black"}
          style={{
            position: "absolute",
            top: "2px",
            left: "-10px",
            transform: "rotate(52deg)"
          }}
        />
      </div>
      <div className="hac-theme-moon" onClick={onHandleTheme} />
    </div>
  );
};

/**
 * A component to switch the theme state beetween light /darkmode
 */
const ThemeSwitch: React.FC<IThemeSwitch> = (props) => {
  const { current, onHandleThemeChange } = props;

  const classNames = cs("hac-theme-switch", {
    "is-light": current === ITheme.light,
    "is-dark": current === ITheme.dark,
  });

  return (
    <div className={classNames}>
      <ThemeSwitchIcon onHandleTheme={onHandleThemeChange} />
    </div>
  );
};

export default memo(ThemeSwitch);
