import { ITheme } from "../../../models/theme.model";

export interface IThemeSwitch {
  /**
   * The current theme
   */
  current: ITheme;
  /**
   * A handler to change the current theme
   */
  onHandleThemeChange: () => void;
}