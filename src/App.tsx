import React, { Profiler, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Header, MainContainer, Playground, Navigation } from "./components";
import { ITheme } from "./models/theme.model";
import { changeTheme } from "./utils/theme.utils";
import { INavigationListItem } from "./components/Navigation/navigation.model";
import { Settings } from "./components/Settings";
import TabBarNavigation from "./components/Navigation/TabBarNavigation/TabBarNavigation";
import ThemeSwitch from "./components/Settings/ThemeSwitch/ThemeSwitch";
import Icon from "./components/Icon/Icon";

//TODO: Rename all .model in .types files.

/**
 * The main component which renders the application.
 */
const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("face");
  const [activeTheme, setActiveTheme] = useState<ITheme>(ITheme.light);

  const navigationItems: INavigationListItem[] = [
    {
      // Include blush, include neck
      key: "face",
      icon: <Icon.Face />,
      name: t("body_parts.face"),
    },
    {
      // Include fringe
      key: "hair",
      icon: <Icon.Face />,
      name: t("body_parts.hair"),
    },
    {
      // Include eyebrown
      key: "eyes",
      icon: <Icon.Face />,
      name: t("body_parts.eyes"),
    },
    {
      key: "nose",
      icon: <Icon.Face />,
      name: t("body_parts.nose"),
    },
    {
      key: "mouth",
      icon: <Icon.Face />,
      name: t("body_parts.mouth"),
    },
    {
      key: "body",
      icon: <Icon.Face />,
      name: t("body_parts.body"),
    },
    {
      key: "accessories",
      icon: <Icon.Face />,
      name: t("body_parts.accessories"),
    },
  ];

  const onInitialRender = useCallback(
    (
      id?: string,
      phase?: "mount" | "update",
      actualDuration?: number,
      baseDuration?: number,
      startTime?: number,
      commitTime?: number,
      interactions?: any
    ) => {
      if (phase === "mount") {
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
    []
  );

  /**
   * A method to toggle the Theme beetween light/dark
   */
  const toggleTheme = useCallback(() => {
    switch (activeTheme) {
      case ITheme.light:
        changeTheme(ITheme.dark, setActiveTheme);
        break;
      case ITheme.dark:
        changeTheme(ITheme.light, setActiveTheme);
        break;
    }
  }, [activeTheme]);

  /**
   * A method to toggle the Navigation beetween open/close
   */
  const handleOnToggleClick = useCallback(() => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
  }, [isNavOpen]);

  /**
   * A method to handle the on click on navigation items
   */
  const handleOnNavItemClick = useCallback((key: string) => {
    setSelectedItem(key);
  }, []);

  return (
    <Profiler id="App" onRender={onInitialRender}>
      <Header>
        <Settings />
      </Header>
      <Navigation
        navItems={navigationItems}
        selected={selectedItem}
        isOpen={isNavOpen}
        handleNavToggle={handleOnToggleClick}
        handleNavItemClick={handleOnNavItemClick}
      />
      <MainContainer>
        <Playground>
          {/* <Circle size={26} bgColor={"var(--font-color)"} position={{ top: 10, left: 10 }} />
          <Oval width={30} height={20} bgColor={"var(--font-color)"} position={{ top: 50, left: 10 }}/>
          <Square size={30} bgColor={"var(--font-color)"} position={{ top: 100, left: 10 }} />
          <Rectangle width={30} height={10} bgColor={"var(--font-color)"} position={{ top: 150, left: 10 }} />
          <Triangle width={12} height={12} bgColor={"red"} position={{ top: 200, left: 10 }} />
          <Triangle width={12} height={12} bgColor={"green"} direction="down" position={{ top: 250, left: 10 }} />
          <Triangle width={12} height={12} bgColor={"blue"} direction="left" position={{ top: 300, left: 10 }} />
          <Triangle width={12} height={12} bgColor={"orange"} direction="right" position={{ top: 350, left: 10 }} rotation={20} /> */}
        </Playground>
        <TabBarNavigation navItems={navigationItems} selected={selectedItem} />
        <ThemeSwitch current={activeTheme} onHandleThemeChange={toggleTheme} />
      </MainContainer>
      {/* {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.language === lng ? "bold" : "normal" }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))} */}
    </Profiler>
  );
};

export default App;
