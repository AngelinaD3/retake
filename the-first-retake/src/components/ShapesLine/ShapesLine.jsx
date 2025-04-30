import PropTypes from 'prop-types';
import Shape from '../Shape/Shape.jsx';
import { useContext } from 'react';
import { ShapesLineContext } from '../../context/ShapesLineContext.jsx';
import { motion } from 'framer-motion';

const ShapesLine = ({ isVertical = false }) => {
  const { shapes, updateShape } = useContext(ShapesLineContext);
  
  const handleClick = (id) => {
    const clickedShape = shapes.find(shape => shape.id === id);
    if (clickedShape) {
      updateShape(id, { clicks: (clickedShape.clicks || 0) + 1 });
    }
  };
  
  const hardcodedShapes = [
    { id: 1, color: 'red', type: 'circle', clicks: 0 },
    { id: 2, color: 'blue', type: 'square', clicks: 0 },
    { id: 3, color: 'green', type: 'triangle', clicks: 0 }
  ];
  
  const shapesToDisplay = shapes?.length > 0 ? shapes : hardcodedShapes;
  
  // Определяем анимацию для контейнера
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Определяем анимацию для отдельных элементов
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <div className="card bg-base-100 shadow-xl m-4 overflow-hidden">
      <div className="card-body">
        <h2 className="card-title text-primary">
          {isVertical ? 'Вертикальное' : 'Горизонтальное'} расположение фигур
          <div className="badge badge-secondary">{shapesToDisplay.length}</div>
        </h2>
        
        <motion.div 
          className={`flex flex-wrap ${isVertical ? 'flex-col' : 'flex-row'} items-center gap-6 p-4 my-2 rounded-lg bg-base-200`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {shapesToDisplay.map((shape) => (
            <motion.div key={shape.id} variants={itemVariants}>
              <div className="indicator">
                {shape.clicks > 0 && (
                  <span className="indicator-item badge badge-primary">{shape.clicks}</span>
                )}
                <Shape
                  tfrColor={shape.color}
                  tfrType={shape.type}
                  onClick={() => handleClick(shape.id)}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="card-actions justify-end">
          <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-100 text-sm">
            {shapesToDisplay.map((shape) => (
              <div key={shape.id} className="stat place-items-center">
                <div className="stat-title capitalize">{shape.color} {shape.type}</div>
                <div className="stat-value">{shape.clicks || 0}</div>
                <div className="stat-desc">кликов</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ShapesLine.propTypes = {
  isVertical: PropTypes.bool
};

export default ShapesLine;