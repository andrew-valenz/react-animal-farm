import '../Animal/Animal.css';

export default function Animal({ prop }) {
  console.log('prop', prop);
  return (
    <div className="animal" style={{ top: `${prop.top}`, left: `${prop.left}` }}>
      <img className="animals" src={`./animals/${prop.type}.svg`}></img>
      <h3 className="animal name">{prop.name}</h3>
      <p>{prop.says}</p>
    </div>
  );
}
