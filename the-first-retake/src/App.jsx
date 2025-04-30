import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShapesLine from './components/ShapesLine/ShapesLine.jsx';
import { ShapesLineProvider } from './context/ShapesLineContext.jsx'
import StatsBar from '../StatsBar.jsx'
import Header from './Header/Header.jsx'
import Home from './pages/home/Home.jsx'

function HomePage() {
  const [count, setCount] = useState(0)
  return (
    <div className="container mx-auto px-4">
      <div className="hero bg-base-200 rounded-lg my-6 py-8">
        <div className="hero-content text-center">
          <div>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <img src={reactLogo} className="w-16 h-16 motion-safe:animate-spin motion-safe:animate-duration-10000" alt="React logo" />
              </a>
            </div>
            <h1 className="text-5xl font-bold mb-6">Vite + React + DaisyUI</h1>
            <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
              <div className="card-body">
                <h2 className="card-title justify-center">Демонстрация интерактивности</h2>
                <div className="flex justify-center my-4">
                  <button 
                    onClick={() => setCount((count) => count + 1)}
                    className="btn btn-primary"
                  >
                    Счетчик: {count}
                  </button>
                </div>
                <p className="text-sm">
                  Редактируйте <code className="bg-base-300 p-1 rounded">src/App.jsx</code> и сохраняйте для проверки HMR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="divider">Демонстрация фигур</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ShapesLine isVertical={false} />
        <ShapesLine isVertical={true} />
      </div>
      
      <div className="alert alert-info shadow-lg mt-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Кликните на Vite и React логотипы чтобы узнать больше</span>
        </div>
      </div>
    </div>
  )
}

// Компонент страницы ошибки
function ErrorPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold text-error">404</h1>
          <h2 className="text-3xl font-bold mt-6">Страница не найдена</h2>
          <p className="py-6">Запрашиваемая страница не существует или была перемещена.</p>
          <a href="/" className="btn btn-primary">На главную</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ShapesLineProvider>
      <Router>
        <div data-theme="light" className="min-h-screen bg-base-100">
          <Header />
          <div className="container mx-auto px-4">
            <StatsBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/horizontal" element={
                <div className="my-8">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Горизонтальное расположение</h2>
                    <p className="text-base-content/70">Фигуры расположены в строку</p>
                  </div>
                  <ShapesLine isVertical={false} />
                </div>
              } />
              <Route path="/vertical" element={
                <div className="my-8">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Вертикальное расположение</h2>
                    <p className="text-base-content/70">Фигуры расположены в столбец</p>
                  </div>
                  <ShapesLine isVertical={true} />
                </div>
              } />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            
            <footer className="footer p-10 bg-base-200 text-base-content mt-12 rounded-lg">
              <div>
                <span className="footer-title">Проект</span> 
                <a className="link link-hover">О проекте</a>
                <a className="link link-hover">Документация</a>
                <a className="link link-hover">GitHub</a>
              </div> 
              <div>
                <span className="footer-title">Технологии</span> 
                <a className="link link-hover">React</a>
                <a className="link link-hover">DaisyUI</a>
                <a className="link link-hover">Tailwind CSS</a>
              </div> 
              <div>
                <span className="footer-title">Задачи проекта</span> 
                <a className="link link-hover">Task 1-5</a>
                <a className="link link-hover">Task 6-7</a>
                <a className="link link-hover">Task 8-10</a>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    </ShapesLineProvider>
  )
}

export default App;