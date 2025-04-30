import { useContext } from 'react';
import PropTypes from 'prop-types';
import Shape from '../Shape/Shape.jsx';
import { ShapesLineContext } from '../../context/ShapesLineContext.jsx';
import './ShapesLine.css';

const ShapesLine = ({ isVertical = false }) => {
  const { shapes, clicks, incrementClick, loading, error } = useContext(ShapesLineContext);
  
  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    flexWrap: isVertical ? 'nowrap' : 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    border: '1px dashed #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    margin: '20px 0',
    minHeight: '150px',
    transition: 'all 0.3s ease'
  };

  const handleClick = (id) => {
    incrementClick(id);
  };

  if (loading) return (
    <div style={{...containerStyle, justifyContent: 'center'}}>
      <p style={{fontSize: '18px', color: '#666'}}>Loading shapes...</p>
    </div>
  );
  
  if (error) return (
    <div style={{...containerStyle, justifyContent: 'center', backgroundColor: '#fff8f8'}}>
      <p style={{color: '#d32f2f'}}>{error}</p>
    </div>
  );
  
  // If no shapes, display a message with debugging info
  if (!shapes || shapes.length === 0) {
    return (
      <div style={{...containerStyle, justifyContent: 'center', backgroundColor: '#fff8f8'}}>
        <div>
          <p style={{color: '#d32f2f'}}>No shapes available.</p>
          <p>Make sure your JSON server is running:</p>
          <code>json-server --watch db.json --port 3001</code>
        </div>
      </div>
    );
  }

  return (
    <div className="shapes-line-container">
      <div style={containerStyle}>
        {shapes.map((shape) => (
          <Shape
            key={shape.id}
            tfrColor={shape.color}
            tfrType={shape.type}
            onClick={() => handleClick(shape.id)}
            clickCount={clicks[shape.id] || 0}
          />
        ))}
      </div>
    </div>
  );
};

ShapesLine.propTypes = {
  isVertical: PropTypes.bool
};

export default ShapesLine;