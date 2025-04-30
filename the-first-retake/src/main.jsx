import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ShapesLineProvider } from './context/ShapesLineContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShapesLineProvider>
        <App />
      </ShapesLineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)