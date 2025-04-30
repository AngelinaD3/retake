import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ShapesLineContext = createContext({
  shapes: [],
  clicks: {},
  incrementClick: () => {},
  loading: false,
  error: null
});

export const ShapesLineProvider = ({ children }) => {
  const [clicks, setClicks] = useState({});
  const [shapes, setShapes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // For Netlify deployment, we'll need to handle the API URL differently
  // For local development: http://localhost:3001
  // For production: either use your deployed API or add fallback shapes
  const API_URL = import.meta.env.PROD 
    ? '/api/shapes'  // This might need to change based on your Netlify setup
    : 'http://localhost:3001/shapes';
    
  // Fallback shapes in case API is not available (especially for Netlify)
  const fallbackShapes = [
    { id: 1, color: 'red', type: 'circle', clicks: 0 },
    { id: 2, color: 'blue', type: 'square', clicks: 0 },
    { id: 3, color: 'green', type: 'triangle', clicks: 0 },
    { id: 4, color: 'purple', type: 'circle', clicks: 0 },
    { id: 5, color: 'orange', type: 'square', clicks: 0 }
  ];

  // Загрузка данных с сервера
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setShapes(response.data);
        
        // Инициализируем клики из данных сервера
        const initialClicks = {};
        response.data.forEach(shape => {
          if (shape.clicks) {
            initialClicks[shape.id] = shape.clicks;
          } else {
            initialClicks[shape.id] = 0; // Initialize with 0 if not provided
          }
        });
        setClicks(initialClicks);
        setError(null);
      } catch (err) {
        console.error("Error fetching shapes:", err);
        // Use fallback shapes when API fails (important for Netlify)
        setShapes(fallbackShapes);
        
        // Initialize clicks with fallback data
        const initialClicks = {};
        fallbackShapes.forEach(shape => {
          initialClicks[shape.id] = shape.clicks || 0;
        });
        setClicks(initialClicks);
        
        setError("Couldn't connect to the shapes API. Using fallback data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const incrementClick = async (id) => {
    try {
      // Update UI immediately for better experience
      setClicks(prev => {
        const newClicks = {
          ...prev,
          [id]: (prev[id] || 0) + 1
        };
        console.log("Updated clicks:", newClicks);
        return newClicks;
      });
      
      // Try to update the server (will fail silently in production without local server)
      if (!import.meta.env.PROD) {
        try {
          await axios.patch(`${API_URL}/${id}`, {
            clicks: (clicks[id] || 0) + 1
          });
          console.log(`Updated click count for shape ${id} on server`);
        } catch (patchError) {
          console.error(`Failed to update click count on server for shape ${id}:`, patchError);
        }
      }
    } catch (error) {
      console.error("Failed to update click count:", error);
      // UI already updated, so no need to handle error for user experience
    }
  };

  return (
    <ShapesLineContext.Provider 
      value={{ 
        shapes, 
        clicks, 
        incrementClick,
        loading,
        error
      }}
    >
      {children}
    </ShapesLineContext.Provider>
  );
};

ShapesLineProvider.propTypes = {
  children: PropTypes.node.isRequired
};