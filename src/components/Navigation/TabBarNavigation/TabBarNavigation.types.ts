import { INavigationListItem } from "../navigation.model";

/**
 * The properties of a TabBarNavigation component.
 */
export interface ITabBarNavigation {
  /**
   * The items to display
   */
  navItems: INavigationListItem[];
  /**
   * The currently selected item
   */
  selected?: string;
}
