import React, { createContext, useState, useContext } from 'react';

// Создаем контекст для линий фигур
const ShapesLineContext = createContext();

export const ShapesLineProvider = ({ children }) => {
  const [lines, setLines] = useState([]);
  
  // Функция для добавления новой линии
  const addLine = (startPoint, endPoint) => {
    const newLine = {
      id: Date.now(), // используем timestamp как временный ID
      startPoint,
      endPoint
    };
    setLines([...lines, newLine]);
  };
  
  // Функция для удаления линии
  const removeLine = (id) => {
    setLines(lines.filter(line => line.id !== id));
  };
  
  // Функция для очистки всех линий
  const clearLines = () => {
    setLines([]);
  };

  return (
    <ShapesLineContext.Provider 
      value={{
        lines,
        addLine,
        removeLine,
        clearLines
      }}
    >
      {children}
    </ShapesLineContext.Provider>
  );
};

// Хук для удобного использования контекста
export const useShapesLine = () => {
  const context = useContext(ShapesLineContext);
  if (!context) {
    throw new Error('useShapesLine must be used within a ShapesLineProvider');
  }
  return context;
};