import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Shape.css';

const Shape = ({ 
  tfrColor = 'red', 
  tfrType = 'circle', 
  onClick = () => {},
  clickCount = 0
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Базовые стили фигуры
  const baseStyle = {
    width: '60px',
    height: '60px',
    margin: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '12px',
    userSelect: 'none'
  };

  const typeStyles = {
    circle: {
      borderRadius: '50%',
      backgroundColor: tfrColor
    },
    square: {
      borderRadius: '4px',
      backgroundColor: tfrColor
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: '0 30px 50px 30px',
      borderColor: `transparent transparent ${tfrColor} transparent`,
      margin: '10px 15px'
    }
  };

  // Обработчик клика с анимацией
  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.div
      className="shape"
      style={{ ...baseStyle, ...typeStyles[tfrType] }}
      onClick={handleClick}
      role="button"
      aria-label={`${tfrColor} ${tfrType} shape. Click count: ${clickCount}`}
      tabIndex="0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isAnimating ? [1, 1.2, 1] : 1,
        rotate: isAnimating ? [0, 10, -10, 0] : 0
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      {clickCount > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {clickCount}
        </motion.span>
      )}
    </motion.div>
  );
};

Shape.propTypes = {
  tfrColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'square', 'triangle']),
  onClick: PropTypes.func,
  clickCount: PropTypes.number
};

export default Shape;