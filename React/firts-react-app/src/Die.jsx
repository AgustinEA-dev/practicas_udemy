function Die({ numSides }) {
  const roll = Math.floor(Math.random() * numSides) + 1;
  return (
    <p>
      {numSides}-Die roll: {roll}
    </p>
  );
}

export default Die;
