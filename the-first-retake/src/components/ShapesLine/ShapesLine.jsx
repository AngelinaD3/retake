import { useContext, createContext, useState } from 'react';
import Shape from '../Shape/Shape.jsx';

// Create context with default values
export const ShapesLineContext = createContext({
  shapes: [],
  clicks: {},
  incrementClick: () => {}
});

// Mock function to replace the missing googleapp import
const saveClickData = (color) => {
  console.log(`Saving click data for ${color}`);
};

const ShapesLine = ({ isVertical = false }) => {
  const { shapes, clicks, incrementClick } = useContext(ShapesLineContext);
  
  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: '10px',
    padding: '15px',
    border: '1px dashed #ccc',
    borderRadius: '8px'
  };
  
  const handleClick = (color) => {
    incrementClick(color);
    saveClickData(color);
  };
  
  return (
    <div>
      <div style={containerStyle}>
        {shapes.map((shape) => (
          <Shape
            key={shape.color}
            tfrColor={shape.color}
            tfrType={shape.type}
            onClick={() => handleClick(shape.color)}
          />
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <p>
          Клики: {shapes.map((shape) => (
            <span key={shape.color}>
              {shape.color} {shape.type}: {clicks[shape.color] || 0} &nbsp;
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

// Create a provider component to wrap around your app
export const ShapesLineProvider = ({ children }) => {
  const [clicks, setClicks] = useState({});
  
  const shapes = [
    { color: 'red', type: 'circle' },
    { color: 'blue', type: 'square' },
    { color: 'green', type: 'triangle' }
  ];
  
  const incrementClick = (color) => {
    setClicks(prevClicks => ({
      ...prevClicks,
      [color]: (prevClicks[color] || 0) + 1
    }));
  };
  
  return (
    <ShapesLineContext.Provider value={{ shapes, clicks, incrementClick }}>
      {children}
    </ShapesLineContext.Provider>
  );
};

export default ShapesLine;