import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShapesLine from './components/ShapesLine/ShapesLine.jsx';
import { ShapesLineProvider } from './context/ShapesLineContext.jsx'

function HomePage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        <div style={{ marginTop: '2rem' }}>
          <h2>Shapes Demo</h2>
          <ShapesLine />
          <ShapesLine isVertical />
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// Simple error page component
function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go back to home</a>
    </div>
  );
}

function App() {
  return (
    <ShapesLineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/horizontal" element={<ShapesLine />} />
          <Route path="/vertical" element={<ShapesLine isVertical />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ShapesLineProvider>
  )
}

export default App;

//ss