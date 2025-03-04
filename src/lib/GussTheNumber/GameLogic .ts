class GameLogic {
  private secretNumber: number;
  private guessLeft: number;

  constructor() {
    this.secretNumber = this.randomNumberBetween1to100();
    this.guessLeft = 10;
  }
  randomNumberBetween1to100(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  checkLeftGuess(): number {
    return this.guessLeft;
  }
  digreesGuess(): boolean {
    if (this.guessLeft > 0) {
      this.guessLeft--;
      return true;
    }
    return false;
  }
  checkGuess(guess: number): 0 | 1 | 2 {
    if (guess === this.secretNumber) {
      return 1;
    }

    return guess > this.secretNumber ? 2 : 0;
  }

  printMessage(status: number): string {
    switch (status) {
      case 0:
        return "Too low";
      case 1:
        return "Exactly, you win";

      case 2:
        return "Too high";
    }

    return "Uncorrect status";
  }
}

export default GameLogic;
