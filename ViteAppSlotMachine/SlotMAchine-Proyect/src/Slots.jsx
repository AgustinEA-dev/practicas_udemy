export default function Slots() {
  const emojis = ["🍒", "🍌", "🍗", "🥗", "🍜", "🍓"];
  let emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
  let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
  let emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
  const isWinner = emoji1 === emoji2 && emoji1 === emoji3;
  return (
    <div>
      <h1>
        {emoji1}
        {emoji2}
        {emoji3}
      </h1>
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You win!" : "You lose"}
      </h2>
      {isWinner && <h3>Congrats</h3>}
    </div>
  );

  // return (
  //
  // );
}
