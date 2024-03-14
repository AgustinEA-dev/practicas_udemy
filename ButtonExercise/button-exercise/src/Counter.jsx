import { useState } from "react";
import "./buttonStyles.css";
export default function Counter() {
  const [count, setcount] = useState(0);
  const changeNum = () => {
    setcount((curCount) => curCount + 5);
  };
  return (
    <div>
      <h1>The count is: {count} </h1>
      <button onClick={changeNum} className="btn">
        Increment
      </button>
    </div>
  );
}
