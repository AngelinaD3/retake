import { useContext } from 'react';
import { ShapesLineContext } from "./src/context/ShapesLineContext.jsx";

const StatsBar = () => {
  const { shapes, toggleOrientation, orientation } = useContext(ShapesLineContext);
  
  if (!shapes || shapes.length === 0) {
    return (
      <div className="stats shadow bg-base-200 my-4 w-full animate-pulse">
        <div className="stat">
          <div className="stat-title">Загрузка статистики...</div>
          <div className="skeleton h-4 w-28 mt-2"></div>
          <button 
            className="btn btn-primary btn-sm mt-4"
            onClick={toggleOrientation}
          >
            Переключить на {orientation === 'horizontal' ? 'вертикальный' : 'горизонтальный'} вид
          </button>
        </div>
      </div>
    );
  }
  
  // Получаем общее количество кликов для индикатора прогресса
  const totalClicks = shapes.reduce((sum, shape) => sum + (shape.clicks || 0), 0);
  const maxClicks = Math.max(...shapes.map(shape => shape.clicks || 0));
  
  return (
    <div className="stats shadow bg-base-200 my-4 w-full">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
        <div className="stat-title">Режим отображения</div>
        <div className="stat-value text-sm">{orientation === 'horizontal' ? 'Горизонтальный' : 'Вертикальный'}</div>
        <div className="stat-desc mt-2">
          <button 
            className="btn btn-primary btn-sm"
            onClick={toggleOrientation}
          >
            Переключить вид
          </button>
        </div>
      </div>
      
      {shapes.map((shape) => (
        <div key={shape.id} className="stat">
          <div className="stat-figure text-secondary">
            <div className={`w-8 h-8 ${
              shape.type === 'circle' ? 'rounded-full' : 
              shape.type === 'square' ? 'rounded-none' : 
              'clip-path-triangle'
            } bg-${shape.color}-500`}>
            </div>
          </div>
          <div className="stat-title capitalize">{shape.color} {shape.type}</div>
          <div className="stat-value">{shape.clicks || 0}</div>
          {totalClicks > 0 && (
            <div className="stat-desc">
              <progress 
                className={`progress progress-${shape.color === 'red' ? 'error' : 
                            shape.color === 'blue' ? 'info' : 
                            shape.color === 'green' ? 'success' : 
                            shape.color === 'yellow' ? 'warning' : 'primary'}`} 
                value={shape.clicks || 0} 
                max={maxClicks > 0 ? maxClicks : 1}
              ></progress>
            </div>
          )}
        </div>
      ))}
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div className="stat-title">Всего кликов</div>
        <div className="stat-value text-primary">{totalClicks}</div>
        <div className="stat-desc">Активность пользователя</div>
      </div>
    </div>
  );
};

export default StatsBar;