type Color = "red" | "green" | "blue";
type Shape = "circle" | "square" | "rectangle" | "triangle";

type ThemeColor = "light" | "dark";
type themeFileds = {
  currentTheme: ThemeColor;
  baseOnTime: boolean;
};
export { type Color, type Shape, type themeFileds, type ThemeColor };
