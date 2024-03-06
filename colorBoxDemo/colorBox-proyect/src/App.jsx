import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const colors = [
  "#ff665e",
  "#5af294",
  "#6666ff",
  "#ffe25e",
  "#008bf8",
  "#ff9100",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

export default App;
