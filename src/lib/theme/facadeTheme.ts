import Theme from "./theme";
import { ThemeColor, themeFileds } from "../types";
class FacadeTheme {
  theme: Theme;

  constructor(baseOnTime?: boolean) {
    this.theme = new Theme();
    baseOnTime && this.onTime();
  }
  changeOnTime(baseOnTime: boolean) {
    this.theme.baseOnTime = baseOnTime;
    baseOnTime && this.onTime();
  }
  changeTheme(theme?: ThemeColor) {
    theme ? this.theme.changeTheme(theme) : this.theme.changeTheme();
  }
  apllyTheme(): ThemeColor {
    return this.theme.currentTheme;
  }
  onTime() {
    const interval = setInterval(() => {
      if (this.theme.baseOnTime) {
        this.theme.changeThemeOnTime();
      } else {
        clearInterval(interval);
      }
    }, 1000 * 60 * 60);
  }
}

export default FacadeTheme;
