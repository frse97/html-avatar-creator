export interface INavigation {
  /**
   * A flag indicating if the navigation is open
   */
  isOpen: boolean;
  /**
   * The items to display
   */
  navItems: INavigationListItem[];
  /**
   * A method to toggle the navigation
   */
  handleNavToggle: () => void;
}

export interface INavigationList {
  /**
   * A flag indicating if the navigation is open
   */
  isOpen: boolean;
  /**
   * The items to display
   */
  navItems: INavigationListItem[];
}

export interface INavigationListItem {
  /**
   * The name of the item 
   */
  name?: string;
  /**
   * The icon to display
   * // TODO: Replace with actual component
   */
  icon?: React.ReactNode | JSX.Element;
}

export interface INavigationToggle {
  /**
   * A flag indicating if the navigation is open
   */
   isOpen: boolean;
  /**
   * A method to toggle the navigation
   */
  handleNavToggle: () => void;
}