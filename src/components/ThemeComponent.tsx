import { useState, useEffect } from "react";
import FacadeTheme from "../lib/theme/facadeTheme";
import { ThemeColor } from "../lib/types";

const ThemeComponent = () => {
  const [themeFacade, setThemeFacade] = useState<FacadeTheme>(
    new FacadeTheme()
  );
  const [baseOnTime, setBaseOnTime] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeColor>(themeFacade.apllyTheme());

  useEffect(() => {
    themeFacade.changeOnTime(baseOnTime);
    themeFacade.changeTheme(theme);
    // עדכון הסטייל של ה-body בהתאם ל-theme הנבחר
    document.body.setAttribute("data-theme", theme);
  }, [baseOnTime, theme]);

  return (
    <div>
      <h1>Theme Component</h1>
      <button onClick={() => setBaseOnTime(!baseOnTime)}>
        {baseOnTime ? "Disable Time-Based Theme" : "Enable Time-Based Theme"}
      </button>
      <button onClick={() => setTheme("dark")}>Change to Dark Theme</button>
      <button onClick={() => setTheme("light")}>Change to Light Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeComponent;
