import { useState } from "react";
import "./toggler.css";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red')
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 1);
  const changeColor = () => setColor('green')
  return (
    <div>
      <p className="isHappy" onClick={toggleIsHappy}>
        {isHappy ? "😊" : "😭"}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <div onClick={changeColor} style={{backgroundColor: color}}>HELLO!</div>
    </div>
  );
}
