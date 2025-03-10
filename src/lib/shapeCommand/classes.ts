import { type Command } from "../interfaces";
import {
  logFuncName,
  greet,
  logParam,
  logAccessor,
  logProps,
} from "../decorates/decoratesFunctions";

@greet
class Position {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  @logFuncName
  @logAccessor
  move(x: number, @logParam y: number): void {
    this.x += x;
    this.y += y;
  }

  applyPosition(): number[] {
    return [this.x, this.y];
  }
}

class MoveCommand implements Command {
  private position: Position;
  private x: number;
  private y: number;

  constructor(position: Position, x: number, y: number) {
    this.position = position;
    this.x = x;
    this.y = y;
  }

  execute(): void {
    this.position.move(this.x, this.y);
  }

  undo(): void {
    this.position.move(-this.x, -this.y);
  }
}

class GameController {
  private commandHistory: Command[] = [];
  private redoStack: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandHistory.push(command);
    // console.log(this.commandHistory);

    this.redoStack = [];
  }

  undoLastMove(): void {
    console.log(this.commandHistory);

    const lastCommand = this.commandHistory.pop();

    if (lastCommand) {
      lastCommand.undo();
      this.redoStack.push(lastCommand);
    }
  }

  redoLastMove(): void {
    const lastCommand = this.redoStack.pop();
    if (lastCommand) {
      lastCommand.execute();
      this.commandHistory.push(lastCommand);
    }
  }

  clearHistory(): void {
    console.log("here");

    this.commandHistory = [];
    this.redoStack = [];
  }
}

const moveUp = (position: Position) => new MoveCommand(position, 0, -10);
const moveDown = (position: Position) => new MoveCommand(position, 0, 10);
const moveLeft = (position: Position) => new MoveCommand(position, -10, 0);
const moveRight = (position: Position) => new MoveCommand(position, 10, 0);

export {
  Position,
  MoveCommand,
  GameController,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
};
