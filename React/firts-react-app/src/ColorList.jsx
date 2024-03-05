import "./ColorListStyles.css";

export default function ColorList({ colors }) {
  return (
    <div>
      <h3>Color List</h3>
      <ul className="ListStyle">
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
