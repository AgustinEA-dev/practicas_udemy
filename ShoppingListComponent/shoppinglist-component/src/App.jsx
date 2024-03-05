import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoppingList";

const data = [
  { item: "eggs", quantity: 12, completed: true },
  { item: "milk", quantity: 1, completed: false },
  { item: "chicken breasts", quantity: 2, completed: true },
  { item: "carrots", quantity: 6, completed: false },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
