import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <Heading color="magenta" text="The Double Dice game!" />
      <SubHeading color="magenta" text="Get doubles to win..." />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      {/* <Greeter name="Agustín" from="Colt" />
      <Greeter name="Rosa" />
      <Greeter name="Juán" from="Tana" />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;
