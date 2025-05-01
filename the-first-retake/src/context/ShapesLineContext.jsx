import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ShapesLineContext = createContext();

export const useShapesLine = () => useContext(ShapesLineContext);

export const ShapesLineProvider = ({ children }) => {
  const [shapes, setShapes] = useState([
    // Инициализируем начальные данные прямо здесь
    { id: 1, color: 'red', type: 'circle', clicks: 0 },
    { id: 2, color: 'blue', type: 'square', clicks: 0 },
    { id: 3, color: 'green', type: 'triangle', clicks: 0 }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orientation, setOrientation] = useState('horizontal');

  // Определяем URL API
  const API_URL = "http://localhost:3001/shapes";

  const fetchShapes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setShapes(response.data);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch shapes:", error);
      // Не меняем shapes, так как они уже инициализированы
      setError("Failed to load shapes from API. Using default data.");
    } finally {
      setLoading(false);
    }
  };

  const updateShape = async (id, newData) => {
    try {
      // Обновляем UI немедленно
      setShapes(prevShapes =>
        prevShapes.map(shape =>
          shape.id === id ? { ...shape, ...newData } : shape
        )
      );
      
      // Пробуем отправить на сервер, но игнорируем ошибки
      try {
        await axios.patch(`${API_URL}/${id}`, newData);
      } catch (err) {
        // Игнорируем ошибки API — UI уже обновлен
      }
    } catch (error) {
      console.error("Failed to update shape:", error);
    }
  };

  const addShape = async (newShape) => {
    const tempShape = { ...newShape, id: Date.now() };
    setShapes(prev => [...prev, tempShape]);
    
    try {
      const response = await axios.post(API_URL, newShape);
      // Заменяем временную фигуру на полученную с сервера
      setShapes(prev =>
        prev.map(shape => shape.id === tempShape.id ? response.data : shape)
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add shape:", error);
      return tempShape;
    }
  };

  // Добавлена функция для удаления фигуры
  const deleteShape = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setShapes(prevShapes => prevShapes.filter(shape => shape.id !== id));
    } catch (error) {
      console.error("Failed to delete shape:", error);
    }
  };

  const toggleOrientation = () => {
    setOrientation(prev => prev === 'horizontal' ? 'vertical' : 'horizontal');
  };

  // Пробуем загрузить данные только один раз при монтировании
  useEffect(() => {
    fetchShapes().catch(() => {
      console.log("Using default shapes data");
    });
  }, []);

  return (
    <ShapesLineContext.Provider 
      value={{ 
        shapes, 
        loading, 
        error, 
        updateShape, 
        addShape,
        deleteShape,
        refreshShapes: fetchShapes,
        orientation,
        toggleOrientation,
        isVertical: orientation === 'vertical'
      }}
    >
      {children}
    </ShapesLineContext.Provider>
  );
};
