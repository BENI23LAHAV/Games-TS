import { type Shapes } from "./interfaces";
import { Color } from "./types";

function logerClass(constructor: Function) {
  console.log(`the class ${constructor.name}`);
}

function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`המתודה ${propertyKey} הופעלה עם הפרמטרים:`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

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

@logerClass
class Circle extends GeneralShape {
  constructor(radius: number, color: Color) {
    super(radius, radius, color); // Circle has the same width and height
  }
  @LogMethod
  getSize(): number {
    return Math.PI * Math.pow(this.width, 2); // πr²
  }
}
@logerClass
class Square extends GeneralShape {
  constructor(width: number, height: number, color: Color) {
    super(width, height, color);
  }
  @LogMethod
  getSize(): number {
    return this.width * this.height;
  }
}
@logerClass
class Rectangle extends GeneralShape {
  constructor(width: number, height: number, color: Color) {
    super(width, height, color);
  }
  @LogMethod
  getSize(): number {
    return this.width * this.height;
  }
}
@logerClass
class Triangle extends GeneralShape {
  constructor(width: number, height: number, color: Color) {
    super(width, height, color);
  }

  @LogMethod
  getSize(): number {
    return (this.width * this.height) / 2;
  }
}

export { GeneralShape, Circle, Square, Rectangle, Triangle };
