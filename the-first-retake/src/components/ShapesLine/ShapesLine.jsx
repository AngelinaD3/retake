import { useContext } from 'react';
import Shape from '../Shape/Shape.jsx';
import { ShapesLineContext } from '../contexts/ShapesLineContext';

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

  return (
    <div>
      <div style={containerStyle}>
        {shapes.map((shape) => (
          <Shape 
            key={shape.color}
            tfrColor={shape.color}
            tfrType={shape.type}
            onClick={() => incrementClick(shape.color)}
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

export default ShapesLine;