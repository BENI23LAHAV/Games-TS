import { Color, Shape } from "./types";

interface Shapes {
  //   shape: Shape;
  width: number;
  height: number;
  color: Color;

  locationX?: number;
  locationY?: number;
}

interface Command {
  execute(): void;
  undo(): void;
}

export { type Shapes, type Command };
