import React, {
  ChangeEvent,
  Profiler,
  useCallback,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Header, MainContainer, Playground, Navigation } from "./components";
import { ITheme } from "./models/theme.model";
import { changeTheme } from "./utils/theme.utils";
import { INavigationListItem } from "./components/Navigation/navigation.model";
import { Settings } from "./components/Settings";
import TabBarNavigation from "./components/Navigation/TabBarNavigation/TabBarNavigation";
import ThemeSwitch from "./components/Settings/ThemeSwitch/ThemeSwitch";
import Icon from "./components/Icon/Icon";
import { Footer } from "./components/Footer";
import { lngs } from "./i18n";
import { PlaygroundFace } from "./components/Playground/PlaygroundFace";
import FaceControl from "./components/Controls/FaceControl/FaceControl";
import { useFaceRef } from "./hooks/Face.hooks";
import { IPlaygroundFace } from "./components/Playground/PlaygroundFace/PlaygroundFace";

//TODO: Rename all .model in .types files.

/**
 * The main component which renders the application.
 */
const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("face");
  const [activeTheme, setActiveTheme] = useState<ITheme>(ITheme.light);

  const initialBackground = "#ffe4e1";
  const inputRef = useRef<IPlaygroundFace>(null);
  const [backgroundColorRef, onBackgroundChange] = useFaceRef(
    inputRef,
    initialBackground
  );

  const navigationItems: INavigationListItem[] = [
    {
      // Include blush, include neck
      key: "face",
      icon: <Icon.Face />,
      name: t("body_parts.face"),
      controlContent: (
        <FaceControl
          backgroundColor={backgroundColorRef.current}
          handleBackgroundColorChange={onBackgroundChange}
        />
      ),
    },
    {
      // Include fringe
      key: "hair",
      icon: <Icon.Hair />,
      name: t("body_parts.hair"),
    },
    {
      // Include eyebrown
      key: "eyes",
      icon: <Icon.Eyes />,
      name: t("body_parts.eyes"),
    },
    {
      key: "nose",
      icon: <Icon.Nose />,
      name: t("body_parts.nose"),
    },
    {
      key: "mouth",
      icon: <Icon.Mouth />,
      name: t("body_parts.mouth"),
    },
    {
      key: "body",
      icon: <Icon.Body />,
      name: t("body_parts.body"),
    },
    {
      key: "accessories",
      icon: <Icon.Accessory />,
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
          <PlaygroundFace backgroundColor={backgroundColorRef.current} />
        </Playground>
        <TabBarNavigation navItems={navigationItems} selected={selectedItem} />
      </MainContainer>
      <Footer>
        <ThemeSwitch current={activeTheme} onHandleThemeChange={toggleTheme} />
      </Footer>
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
