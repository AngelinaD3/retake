import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import ShapesLine from './components/ShapesLine/ShapesLine.jsx'
import Home from './pages/home/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import StatsBar from '../StatsBar.jsx' // Fixed the import path
import { useContext } from 'react'
import { ShapesLineContext } from './context/ShapesLineContext.jsx'

// Header component with navigation
function Header() {
  const location = useLocation()
  
  return (
    <header className="app-header">
      <nav className="main-navigation">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/horizontal" 
          className={`nav-link ${location.pathname === '/horizontal' ? 'active' : ''}`}
        >
          Horizontal ShapesLine
        </Link>
        <Link 
          to="/vertical" 
          className={`nav-link ${location.pathname === '/vertical' ? 'active' : ''}`}
        >
          Vertical ShapesLine
        </Link>
      </nav>
    </header>
  )
}

// Horizontal ShapesLine page
function HorizontalShapesPage() {
  const { clicks } = useContext(ShapesLineContext)
  const [layoutDirection, setLayoutDirection] = useState('horizontal')

  const toggleLayout = () => {
    setLayoutDirection(prev => (prev === 'horizontal' ? 'vertical' : 'horizontal'))
  }

  return (
    <div className="shapes-page">
      <h2>Horizontal ShapesLine</h2>
      <StatsBar onToggle={toggleLayout} />
      <ShapesLine isVertical={layoutDirection === 'vertical'} />
    </div>
  )
}

// Vertical ShapesLine page
function VerticalShapesPage() {
  const { clicks } = useContext(ShapesLineContext)
  const [layoutDirection, setLayoutDirection] = useState('vertical')

  const toggleLayout = () => {
    setLayoutDirection(prev => (prev === 'horizontal' ? 'vertical' : 'horizontal'))
  }

  return (
    <div className="shapes-page">
      <h2>Vertical ShapesLine</h2>
      <StatsBar onToggle={toggleLayout} />
      <ShapesLine isVertical={layoutDirection === 'vertical'} />
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horizontal" element={<HorizontalShapesPage />} />
          <Route path="/vertical" element={<VerticalShapesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      
      <footer className="app-footer">
        <p>© 2025 ShapesLine App - Task 9 Complete</p>
      </footer>
    </div>
  )
}

export default App