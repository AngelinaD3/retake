import { useState } from 'react';
import Shape from './Shape';

const ShapesLine = ({ isVertical = false }) => {
  const shapes = ['red', 'blue', 'green'];
  const [clicks, setClicks] = useState({ 
    red: 0, 
    blue: 0, 
    green: 0 
  });

  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: '10px',
    padding: '15px',
    border: '1px dashed #ccc',
    borderRadius: '8px'
  };

  const handleClick = (color) => {
    setClicks(prev => ({
      ...prev,
      [color]: prev[color] + 1
    }));
  };

  return (
    <div>
      <div style={containerStyle}>
        {shapes.map((color) => (
          <Shape 
            key={color}
            tfrColor={color}
            onClick={() => handleClick(color)}
          />
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <p>Клики: 🔴 {clicks.red} | 🔵 {clicks.blue} | 🟢 {clicks.green}</p>
      </div>
    </div>
  );
};

export default ShapesLine;