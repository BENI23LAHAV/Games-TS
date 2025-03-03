import { type Shapes } from "./interfaces";
import { Color } from "./types";

abstract class GeneralShape implements Shapes {
  width: number;
  height: number;
  color: Color;

  constructor(width: number, height: number, color: Color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  abstract getSize(): number;
}

class Circle extends GeneralShape {
  constructor(radius: number, color: Color) {
    super(radius, radius, color); // Circle has the same width and height
  }

  getSize(): number {
    return Math.PI * Math.pow(this.width, 2); // πr²
  }
}

class Square extends GeneralShape {
  constructor(width: number, height: number, color: Color) {
    super(width, height, color);
  }

  getSize(): number {
    return this.width * this.height;
  }
}

class Rectangle extends GeneralShape {
  constructor(width: number, height: number, color: Color) {
    super(width, height, color);
  }
  getSize(): number {
    return this.width * this.height;
  }
}
class Triangle extends GeneralShape {
  constructor(width: number, height: number, color: Color) {
    super(width, height, color);
  }
  getSize(): number {
    return (this.width * this.height) / 2;
  }
}

export { GeneralShape, Circle, Square, Rectangle, Triangle };
