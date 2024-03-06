function hadleClick() {
  console.log("Clicked the button!!");
}

export default function Clicker() {
  return (
    <div>
      <p>Click the button</p>
      <button onClick={hadleClick}>Click!</button>
    </div>
  );
}
