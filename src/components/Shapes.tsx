import { useEffect, useState } from "react";
import { type Shape, type Color } from "../lib/types.ts";
import { FactoryShapes } from "../lib/FactoryShapes.ts";
import { GeneralShape } from "../lib/classes.ts";
import {
  Position,
  GameController,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
} from "../lib/shapeCommand/classes.ts";
import "../style/Shapes.css";

export default function Shapes(): React.ReactElement {
  const [shape, setShape] = useState<Shape>("square");
  const [color, setColor] = useState<Color>("red");
  const [height, setHeight] = useState<number>(100); //Non  used yet
  const [width, setWidth] = useState<number>(100); //Non  used yet

  const [position, setPosition] = useState(new Position(0, 0));
  const [generalShape, setGeneralShape] = useState<GeneralShape | null>(null);

  const gameController = new GameController();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          gameController.executeCommand(moveUp(position));
          break;
        case "ArrowDown":
        case "s":
          gameController.executeCommand(moveDown(position));
          break;
        case "ArrowLeft":
        case "a":
          gameController.executeCommand(moveLeft(position));
          break;
        case "ArrowRight":
        case "d":
          gameController.executeCommand(moveRight(position));
          break;
        case "z":
          gameController.undoLastMove();
          break;
        case "y":
          gameController.redoLastMove();
          break;
        default:
          break;
      }
      setPosition(new Position(position.x, position.y));
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [position]);

  useEffect(() => {
    setGeneralShape(FactoryShapes.createShape(shape, width, height, color));
  }, [shape, color, height, width]);

  return (
    <>
      <h1>Move the Shape with Arrow Keys 🎮</h1>
      <p>
        Use Arrow Keys or W, A, S, D to move the shape. Press "Z" to undo, "Y"
        to redo.
      </p>

      <label htmlFor="shape">Choose your shape:</label>
      <select
        name="shape"
        id="shape"
        onChange={(e) => setShape(e.currentTarget.value as Shape)}>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="rectangle">Rectangle</option>
        <option value="triangle">Triangle</option>
      </select>

      <label htmlFor="color">Choose your color:</label>
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
        style={{
          backgroundColor: color,

          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>

      <div>Size: {generalShape?.getSize()}</div>
    </>
  );
}
