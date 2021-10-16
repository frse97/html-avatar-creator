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
   * The currently selected item
   */
   selected?: string;
  /**
   * A method to toggle the navigation
   */
  handleNavToggle: () => void;
  /**
   * A method to handle item selection
   */
  handleNavItemClick: (key: string) => void;
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
  /**
   * The currently selected item
   */
  selected?: string;
  /**
   * A method to handle item selection
   */
   handleNavItemClick: (key: string) => void;
}

export interface INavigationListItem {
  /**
   * The key of the item
   */
  key: string;
  /**
   * The name of the item 
   */
  name?: string;
  /**
   * The icon to display
   */
  icon?: React.ReactNode | JSX.Element;
  /**
   * The content to display in the control
   */
  controlContent?: React.ReactNode;
  /**
   * A flag to identify if an item is selected
   */
  isSelected?: boolean;
  /**
   * A on click handler to click the items
   */
  onHandleClick?: () => void;
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