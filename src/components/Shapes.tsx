import { useEffect, useState } from "react";
import { type Shape, type Color } from "../lib/types.ts";
import { FactoryShapes } from "../lib/FactoryShapes.ts";
import { GeneralShape } from "../lib/classes.ts";
import "../style/Shapes.css";

export default function Shapes(): React.ReactElement {
  const [shape, setShape] = useState<Shape>("square");
  const [color, setColor] = useState<Color>("red");
  const [height, setHeight] = useState<number>(100); //not used for now
  const [width, setWidth] = useState<number>(100); //not used for now

  const [generalShape, setGeneralShape] = useState<GeneralShape | null>(null);

  useEffect(() => {
    setGeneralShape(FactoryShapes.createShape(shape, width, height, color));
  }, [shape, color, height, width]);

  return (
    <>
      <h1>Shapes</h1>

      <label htmlFor="shape">Choose your shape</label>
      <select
        name="shape"
        id="shape"
        onChange={(e) => setShape(e.currentTarget.value as Shape)}>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="rectangle">Rectangle</option>
        <option value="triangle">Triangle</option>
      </select>

      <label htmlFor="color">Choose your color</label>
      <select
        name="color"
        id="color"
        onChange={(e) => setColor(e.currentTarget.value as Color)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <div
        className={`shape ${shape}`}
        style={
          shape === "triangle"
            ? { borderBottomColor: color }
            : { backgroundColor: color, width: width, height: height }
        }></div>

      <div>Size: {generalShape?.getSize()}</div>
    </>
  );
}
