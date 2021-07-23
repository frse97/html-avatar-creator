import React, { Profiler, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { lngs } from "./i18n";
import { ITheme } from "./models/theme.model";
import { changeTheme } from "./utils/theme.utils";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeTheme, setActiveTheme] = useState<ITheme>(ITheme.light);

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

  return (
    <Profiler id="App" onRender={onInitialRender}>
      <h1>HTML Avatar Creator</h1>
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
