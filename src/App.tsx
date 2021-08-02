import React, { Profiler, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Header, MainContainer, Playground, Navigation } from "./components";
import { lngs } from "./i18n";
import { ITheme } from "./models/theme.model";
import { changeTheme } from "./utils/theme.utils";
import { INavigationListItem } from './components/Navigation/navigation.model';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<ITheme>(ITheme.light);

  const navigationItems: INavigationListItem[] = [
    {
      // Include blush, include neck
      icon: <></>,
      name: t("body_parts.face"),
    },
    {
      // Include fringe
      icon: <></>,
      name: t("body_parts.hair"),
    },
    {
      // Include eyebrown
      icon: <></>,
      name: t("body_parts.eyes"),
    },
    {
      icon: <></>,
      name: t("body_parts.nose"),
    },
    {
      icon: <></>,
      name: t("body_parts.mouth"),
    },
    {
      icon: <></>,
      name: t("body_parts.body"),
    },
    {
      icon: <></>,
      name: t("body_parts.accessories"),
    }
  ]

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
  }, [isNavOpen])

  return (
    <Profiler id="App" onRender={onInitialRender}>
      <Header />
      <Navigation navItems={navigationItems} isOpen={isNavOpen} handleNavToggle={handleOnToggleClick} />
      <MainContainer isNavOpen={isNavOpen}>
        <Playground>
          Avatar
        </Playground>
      </MainContainer>
      <p>{t("test")}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.language === lng ? "bold" : "normal" }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </Profiler>
  );
};

export default App;
