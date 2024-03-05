function Greeter({ name = "everyone", from = "anonymous" }) {
  return (
    <>
      <h1>Hi there, {name}!!!</h1>
      <h2>from, {from}</h2>
    </>
  );
}

export default Greeter;
