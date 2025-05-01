import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Shape = ({ 
  tfrColor = 'red', 
  tfrType = 'circle', 
  onClick = () => {} 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  // Определяем классы формы
  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-none',
    triangle: 'clip-path-triangle', // Для треугольника (используем CSS clip-path)
  }[tfrType];

  // Определяем цвета для daisyUI
  const colorMap = {
    red: { bg: 'bg-red-500', hover: 'hover:bg-red-600', shadow: 'shadow-red-300', blink: 'bg-red-300' },
    blue: { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', shadow: 'shadow-blue-300', blink: 'bg-blue-300' },
    green: { bg: 'bg-green-500', hover: 'hover:bg-green-600', shadow: 'shadow-green-300', blink: 'bg-green-300' },
    yellow: { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600', shadow: 'shadow-yellow-300', blink: 'bg-yellow-300' },
  };
  
  const colorClasses = colorMap[tfrColor] || { bg: 'bg-gray-500', hover: 'hover:bg-gray-600', shadow: 'shadow-gray-300', blink: 'bg-gray-300' };
  
  // Анимация для эффекта нажатия
  const clickAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.5 }
  };

  const handleClick = () => {
    setIsPressed(true);
    onClick();
    setTimeout(() => setIsPressed(false), 300);
  };

  return (
    <motion.div 
      className={`
        w-full h-full aspect-square 
        ${shapeClasses} 
        ${isPressed ? colorClasses.blink : colorClasses.bg} 
        ${colorClasses.hover}
        shadow-lg ${colorClasses.shadow}
        transition-all duration-300 
        cursor-pointer
        flex items-center justify-center
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={clickAnimation}
      onClick={handleClick}
      role="button"
      aria-label={`${tfrColor} ${tfrType}`}
    />
  );
};

Shape.propTypes = {
  tfrColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'square', 'triangle']),
  onClick: PropTypes.func,
};

export default Shape;
