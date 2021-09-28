import React, { useCallback, useState } from "react";
import cs from "classnames";
import { IHasClassname, IHasStyles } from "../../models/common.model";
import "./Settings.scss";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

interface ISettings extends IHasClassname, IHasStyles {}

/**
 * A component to display the icon for the settings
 */
export const SettingsWheel: React.FC = () => {
  return (
    <>
      <div className="cog-1 settings-icon" />
      <div className="cog-2 settings-icon" />
      <div className="circle-settings" />
      <div className="cog-3 settings-icon" />
      <div className="cog-4 settings-icon" />
    </>
  );
};

/**
 * A component to change the general settings of the app
 */
export const Settings: React.FC<ISettings> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSettingsVisibleChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const classNames = cs("hac-settings", {
    "is-open": isOpen,
  });

  return (
    <div className="hac-settings-container">
      <button
        type="button"
        className={classNames}
        onClick={handleSettingsVisibleChange}
        onKeyDown={handleSettingsVisibleChange}
      >
        <SettingsWheel />
      </button>
      <div className="hac-settings-menu">
        <b>Language</b>
        <ul>
          <li>EN - English</li>
          <li>DE - German</li>
          <li>IT - Italian</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
