import { createContext, useState } from 'react';

export const ShapesLineContext = createContext();

export const ShapesLineProvider = ({ children }) => {
  const [shapes, setShapes] = useState([]);
  
  return (
    <ShapesLineContext.Provider value={{ shapes, setShapes }}>
      {children}
    </ShapesLineContext.Provider>
  );
};
//d