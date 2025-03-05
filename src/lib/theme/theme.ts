import { type ThemeColor, type themeFileds } from "../types";

class Theme {
  currentTheme: ThemeColor;
  baseOnTime: boolean;

  constructor(baseOnTime?: boolean) {
    const theme = this.loadTheme();
    if (theme !== null) {
      this.currentTheme = theme.currentTheme;
      this.baseOnTime = theme.baseOnTime;
    } else {
      this.currentTheme = "light";
      this.baseOnTime = baseOnTime || false;
      this.saveTheme();
    }
  }
  changeTheme(): void;
  changeTheme(theme: ThemeColor): void;

  changeTheme(theme?: ThemeColor): void {
    theme
      ? (this.currentTheme = theme)
      : (this.currentTheme = this.currentTheme === "light" ? "dark" : "light");
    this.saveTheme();
  }
  changeThemeOnTime(): void {
    if (this.baseOnTime) {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 18) {
        this.currentTheme = "light";
      } else {
        this.currentTheme = "dark";
      }
    }
  }
  saveTheme(): void {
    localStorage.setItem(
      "theme",
      JSON.stringify({
        currentTheme: this.currentTheme,
        baseOnTime: this.baseOnTime,
      })
    );
  }
  loadTheme(): themeFileds | null {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return JSON.parse(theme);
    }
    return null;
  }
}

export default Theme;
