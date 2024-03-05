// export default function DoubleDice() {
//   const roll1 = Math.floor(Math.random() * 6) + 1;
//   const roll2 = Math.floor(Math.random() * 6) + 1;
//   const result = roll1 === roll2 ? "You win!" : "You lose :(";
//   return (
//     <div>
//       <h2>{result}</h2>
//       <p>NUM1: {roll1}</p>
//       <p>NUM2: {roll2}</p>
//     </div>
//   );
// }

// export default function DoubleDice() {
//   const roll1 = Math.floor(Math.random() * 6) + 1;
//   const roll2 = Math.floor(Math.random() * 6) + 1;
//   return (
//     <div>
//       <h2>{roll1 === roll2 ? "You win!" : "You lose :("}</h2>
//       <p>NUM1: {roll1}</p>
//       <p>NUM2: {roll2}</p>
//     </div>
//   );
// }

export default function DoubleDice() {
  const emojis = ["🍒", "🍌"]
  const roll1 = emojis[Math.floor(Math.random() * emojis.length)];
  const roll2 = emojis[Math.floor(Math.random() * emojis.length)];
  const isWinner = roll1 === roll2;
  const styles = { color: isWinner ? "green" : "red" };

  return (
    <div className="DoubleDice" style={styles}>
      <h2>Double Dice</h2>
      {isWinner ? <h3>You win!</h3> : ":("}
      <p>NUM1: {roll1}</p>
      <p>NUM2: {roll2}</p>
    </div>
  );
}
