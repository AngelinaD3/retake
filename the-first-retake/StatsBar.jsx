const StatsBar = ({ clicks, onToggle }) => (
    <div>
      <button onClick={onToggle}>Toggle Layout</button>
      <div>
        {Object.entries(clicks).map(([color, count]) => (
          <p key={color}>{color}: {count}</p>
        ))}
      </div>
    </div>
  );