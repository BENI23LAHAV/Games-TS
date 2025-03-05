import React, { useState } from "react";
import GameFacade from "../lib/GussTheNumber/GameFacade ";

function GussTheNumber(): React.ReactElement {
  const [gameFacade] = useState(new GameFacade());
  const [guess, setGuess] = useState<number | "">("");
  const [message, setMessage] = useState<string>(
    "Guess a number between 1 and 100"
  );

  const handleGuess = () => {
    if (guess === "" || isNaN(Number(guess))) {
      setMessage("Please enter a valid number!");
      return;
    }
    const response = gameFacade.game(Number(guess));
    setMessage(response);
    setGuess("");
  };

  const handleRestart = () => {
    gameFacade.restartGame();
    setMessage("Game restarted! Guess a number between 1 and 100");
    setGuess("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Number Guessing Game</h1>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) =>
          setGuess(e.target.value === "" ? "" : Number(e.target.value))
        }
        placeholder="Enter a number"
        disabled={gameFacade.gameOver}
      />
      <button onClick={handleGuess} disabled={gameFacade.gameOver}>
        Guess
      </button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default GussTheNumber;
