import { useEffect, useState } from "react";

type MemoryGamesStates = {
  num: number;
  timeToDisplay: number;
  visible: boolean;
  guessLeft: number;
  status: GameStatus;
};
const GameStatesVisible = {
  visible: true,
  hidden: false,
} as const;

const GameStatus = {
  win: "win",
  lost: "lost",
  running: "running",
} as const;

type GameStatesVisible = keyof typeof GameStatesVisible;
type GameStatus = keyof typeof GameStatus;

function MemoryGame() {
  const [memorygame, setMemoryGame] = useState<MemoryGamesStates>({
    num: Math.floor(Math.random() * 100),
    timeToDisplay: 3000,
    visible: GameStatesVisible["visible"],
    guessLeft: 5,
    status: GameStatus.running,
  });
  const [currentGuess, setCurrentGuess] = useState<number>(NaN);
  useEffect(() => {
    const interval = setInterval(() => {
      if (memorygame.timeToDisplay <= 0) {
        clearInterval(interval);
      }

      setMemoryGame((prev) => {
        return {
          num: prev.num,
          timeToDisplay: prev.timeToDisplay - 1000,
          visible: prev.timeToDisplay - 1000 > 0,
          guessLeft: prev.guessLeft,
          status: prev.status,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [memorygame.visible]);

  return (
    <div>
      <h1>Memory Game</h1>
      <div className="Show-Number">
        {memorygame.visible && <h2>{memorygame.num}</h2>}
        {memorygame.visible && (
          <h3>Time to display: {memorygame.timeToDisplay / 1000} Sec</h3>
        )}
        {memorygame.status != "running" && <h2>You {memorygame.status}</h2>}
      </div>
      <label htmlFor="input-number">Enter a number </label>
      <input
        type="number"
        placeholder="Enter a number"
        id="input-number"
        onChange={(e) => {
          setCurrentGuess(Number(e.currentTarget.value));
        }}
      />
      <button
        onClick={() => {
          submit(currentGuess, memorygame);
        }}>
        Submit
      </button>
    </div>
  );
}

export default MemoryGame;

function submit(guess: number, memoryGamesStates: MemoryGamesStates): void {
  if (memoryGamesStates.status === "running" && guess) {
    if (guess === memoryGamesStates.num) {
      console.log("win");

      memoryGamesStates.status = GameStatus.win;
      memoryGamesStates.visible = GameStatesVisible["visible"];
      memoryGamesStates.guessLeft = 0;
      return;
    }
    memoryGamesStates.guessLeft--;
    if (memoryGamesStates.guessLeft <= 0) {
      memoryGamesStates.status = GameStatus.lost;
      memoryGamesStates.visible = GameStatesVisible["visible"];
      return;
    }
  }
}
