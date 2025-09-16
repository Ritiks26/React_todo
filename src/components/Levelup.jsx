import "./LevelUp.css";

export default function LevelUp() {
  return (
    <div className="level-container">
      {Array.from({ length: 7 }).map((_, i) => (
        <h1 key={i} className={`level-text ${i === 3 ? "highlight" : ""}`}>
          LEVEL UP
        </h1>
      ))}
    </div>
  );
}
