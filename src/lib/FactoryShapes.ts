import { type Color, Shape } from "./types.ts";
import { Person, Debounce } from "./decorates/decoratorsPractice.ts";
// const p = new Person();
// p.getFirstName();
import {
  GeneralShape,
  Circle,
  Square,
  Rectangle,
  Triangle,
} from "./classes.ts";

class FactoryShapes {
  static createShape(
    shape: Shape,
    width: number = 100,
    height: number = 100,
    color: Color = "red"
  ): GeneralShape {
    switch (shape) {
      case "circle":
        return new Circle(width, color);
      case "square":
        return new Square(width, height, color);
      case "rectangle":
        return new Rectangle(width, height, color);
      case "triangle":
        return new Triangle(width, height, color);
      default:
        throw new Error("Invalid shape");
    }
  }

  static getSize(shape: GeneralShape) {
    return shape.getSize();
  }
}

export { FactoryShapes };
