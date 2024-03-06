import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clicker from "./Clicker";
import Counter from "./Counter";
import Test from "./Test";
import Toggler from "./Toggler";
function App() {
  return (
    <div>
      <Toggler />
      {/* <Counter /> */}
      {/* <Test /> */}
      {/* <Clicker message={"HIIII!!!"} buttonText={"Please Click Me"} />
      <Clicker message={"Please Stop Clicking Me!"} buttonText={"Do not click!"} /> */}
    </div>
  );
}

export default App;
