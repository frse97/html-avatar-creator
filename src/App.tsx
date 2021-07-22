import React, { Profiler, useCallback, useState } from "react";
import { ITheme } from "./models/theme.model";
import { changeTheme } from "./utils/theme.utils";

const App: React.FC = () => {

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
    switch(activeTheme) {
      case ITheme.light: 
        changeTheme(ITheme.dark, setActiveTheme)
        break;
      case ITheme.dark:
        changeTheme(ITheme.light, setActiveTheme)
        break;
    }
  }, [activeTheme])

  return (
    <Profiler id="App" onRender={onInitialRender}>
      <h1>HTML Avatar Creator</h1>
      <p>This is an English text</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </Profiler>
  );
};

export default App;
