import Property from "./Property";
import "./ListStyles.css";

export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => {
        return <Property {...p} />;
      })}
    </div>
  );
}
