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
  
  // Контейнер для фигур: для горизонтального расположения используем flex-row с gap 100px,
  // для вертикального – flex-col с gap 100px. Центрирование элементов.
  const containerClasses = isVertical
    ? "flex flex-col justify-center items-center gap-y-[100px] w-full h-full p-4"
    : "flex flex-row justify-center items-center gap-x-[100px] w-full h-full p-4";
  
  // Анимационные варианты для контейнера и элементов (опционально)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };
  
  return (
    <div className="card bg-base-100 shadow-xl m-4 overflow-hidden h-full">
      <div className="card-body h-full">
        <h2 className="card-title text-primary">
          {isVertical ? 'Вертикальне' : 'Горизонтальне'} Розположення фігур
          <div className="badge badge-secondary">{shapesToDisplay.length}</div>
        </h2>
        
        {/* Дополнительный отступ между заголовком и контейнером фигур */}
        <div className="mt-10">
          <motion.div 
            className={containerClasses}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {shapesToDisplay.map((shape) => (
              <motion.div 
                key={shape.id} 
                variants={itemVariants}
                // Размер обёртки каждой фигуры – можно настроить по необходимости
                className="w-[100px] h-[100px]"
              >
                <div className="indicator w-full h-full">
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
        </div>
        
        <div className="card-actions justify-end mt-10">
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
  isVertical: PropTypes.bool,
};

export default ShapesLine;
