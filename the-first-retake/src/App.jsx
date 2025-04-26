import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShapesLine from './components/ShapesLine'
import { ShapesLineProvider } from './context/ShapesLineContext'

function Home() {
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

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/horizontal", element: <ShapesLine /> },
  { path: "/vertical", element: <ShapesLine isVertical /> },
])

function App() {
  return (
    <ShapesLineProvider>
      <RouterProvider router={router} />
    </ShapesLineProvider>
  )
}

export default App