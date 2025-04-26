import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShapesLineContext = createContext();

export const useShapesLine = () => useContext(ShapesLineContext);

export const ShapesLineProvider = ({ children }) => {
  const [shapes, setShapes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:3001/shapes"; // Исправлен порт на 3001

  const fetchShapes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setShapes(response.data);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch shapes:", error);
      setError("Failed to load shapes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const updateShape = async (id, newData) => {
    try {
      await axios.patch(`${API_URL}/${id}`, newData);
      // Оптимизированное обновление без повторного запроса
      setShapes(prevShapes => 
        prevShapes.map(shape => 
          shape.id === id ? { ...shape, ...newData } : shape
        )
      );
    } catch (error) {
      console.error("Failed to update shape:", error);
      throw error; // Позволяет обработать ошибку в компоненте
    }
  };

  const addShape = async (newShape) => {
    try {
      const response = await axios.post(API_URL, newShape);
      setShapes(prev => [...prev, response.data]);
      return response.data;
    } catch (error) {
      console.error("Failed to add shape:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchShapes();
  }, []);

  return (
    <ShapesLineContext.Provider 
      value={{ 
        shapes, 
        loading, 
        error, 
        updateShape, 
        addShape,
        refreshShapes: fetchShapes
      }}
    >
      {children}
    </ShapesLineContext.Provider>
  );
};