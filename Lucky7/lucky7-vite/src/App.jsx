import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Die from "./Die";
// import Dice from "./Dice";
import LuckyN from "./LuckyN";

function App() {
  return (
    <>
      <LuckyN numDice={4} />
    </>
  );
}

export default App;
