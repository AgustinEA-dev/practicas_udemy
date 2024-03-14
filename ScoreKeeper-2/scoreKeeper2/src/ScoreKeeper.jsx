import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const addScore = (idx) => {
    setScores((prevScores) => {
      const copy = [...prevScores];
      copy[idx] += 1;
      return copy;
    });
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}: {score}{" "}
              <button onClick={() => addScore(idx)}>+1</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
