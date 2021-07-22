import { ITheme } from "../models/theme.model";

export const changeTheme = (type: ITheme, changeTheme: React.Dispatch<React.SetStateAction<ITheme>>) => {
  changeTheme(type);
  document.documentElement.setAttribute("data-theme", type);
};