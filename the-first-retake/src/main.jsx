import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShapesLineProvider } from './context/ShapesLineContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShapesLineProvider>
      <App />
    </ShapesLineProvider>
  </StrictMode>,
)