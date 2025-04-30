import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShapesLineContext } from './src/context/ShapesLineContext.jsx';

const StatsBar = ({ onToggle }) => {
  const { shapes, clicks } = useContext(ShapesLineContext);

  return (
    <div className="stats-bar">
      <button 
        onClick={onToggle}
        className="toggle-button"
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '16px',
          fontWeight: 'bold'
        }}
      >
        Toggle Layout
      </button>
      
      <div className="click-stats" style={{ marginTop: '16px' }}>
        <h3>Shape Click Statistics:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {shapes && shapes.map((shape) => (
            <li key={shape.id} style={{ margin: '8px 0', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <span style={{ 
                display: 'inline-block',
                width: '12px',
                height: '12px',
                backgroundColor: shape.color,
                marginRight: '8px',
                borderRadius: shape.type === 'circle' ? '50%' : '0'
              }}></span>
              {shape.color} {shape.type}: <strong>{clicks[shape.id] || 0}</strong> clicks
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  onToggle: PropTypes.func.isRequired
};

export default StatsBar;