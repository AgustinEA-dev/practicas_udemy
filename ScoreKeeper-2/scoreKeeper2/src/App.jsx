import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScoreKeeper from "./ScoreKeeper";
function App() {
  return (
    <div>
      <ScoreKeeper numPlayers={10} target={5} />
    </div>
  );
}

export default App;
