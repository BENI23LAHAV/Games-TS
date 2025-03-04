import GameLogic from "./GameLogic ";

class GameFacade {
  gameLogic: GameLogic;
  gameOver: boolean;

  constructor() {
    this.gameLogic = new GameLogic();
    this.gameOver = false;
  }

  game(guess: number): string {
    if (this.gameLogic.checkLeftGuess() <= 0) {
      this.gameOver = true;
    }

    if (this.gameOver) {
      return "Game over! please smash the Restart button.";
    }
    if (guess < 0 || guess > 100) {
      return "Invalid guess, try again.";
    }

    this.gameLogic.digreesGuess();
    const statusGuess: number = this.gameLogic.checkGuess(guess);
    const message: string = this.gameLogic.printMessage(statusGuess);

    if (statusGuess === 1) {
      this.gameOver = true;
    }
    return message;
  }
  restartGame() {
    this.gameLogic = new GameLogic();
    this.gameOver = false;
  }
}

export default GameFacade;
