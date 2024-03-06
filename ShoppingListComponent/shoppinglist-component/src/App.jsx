import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Form from "./Form";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: true },
  { id: 2, item: "milk", quantity: 1, completed: false },
  { id: 3, item: "chicken breasts", quantity: 2, completed: true },
  { id: 4, item: "carrots", quantity: 6, completed: false },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Form />
      <ShoppingList items={data} />
      <Clicker />
    </div>
  );
}

export default App;
