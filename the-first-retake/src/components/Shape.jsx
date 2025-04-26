import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; 
import './Shape.css'; 

const Shape = ({ 
  tfrColor = 'red', 
  tfrType = 'circle', 
  onClick = () => {} 
}) => {
  const shapeStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: tfrColor,
    margin: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: tfrType === 'circle' ? '50%' : 
                tfrType === 'square' ? '0%' :
                '10%',
  };

  return (
    <motion.div 
      className="shape"
      style={shapeStyle}
      onClick={onClick}
      role="button"
      aria-label={`${tfrColor} ${tfrType}`}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.5 }}
    />
  );
};

Shape.propTypes = {
  tfrColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'square', 'triangle']),
  onClick: PropTypes.func,
};

export default Shape;