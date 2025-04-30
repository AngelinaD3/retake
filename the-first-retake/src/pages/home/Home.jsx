import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero секция */}
      <div className="hero bg-base-200 rounded-box mb-8 p-8">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-primary">The First Retake</h1>
            <p className="py-6 text-lg">
              Інтерактивний React проект, що демонструє роботу з компонентами, 
              маршрутизацією та візуальними ефектами
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link to="/horizontal" className="btn btn-primary">
                Горизонтальний вигляд
              </Link>
              <Link to="/vertical" className="btn btn-secondary">
                Вертикальний вигляд
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Описание проекта */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-accent">О проекте</h2>
            <p>
              Проєкт розроблено як демонстрацію використання React компонентів, 
              маршрутизації та інтерактивних візуальних ефектів. Ви можете 
              взаємодіяти з різними геометричними фігурами та відстежувати 
              статистику кліків.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-accent">Технологии</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="badge badge-primary badge-lg">React</span>
              <span className="badge badge-secondary badge-lg">Vite</span>
              <span className="badge badge-accent badge-lg">DaisyUI</span>
              <span className="badge badge-neutral badge-lg">Tailwind CSS</span>
              <span className="badge badge-ghost badge-lg">React Router</span>
              <span className="badge badge-info badge-lg">Framer Motion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Функциональность */}
      <h2 className="text-3xl font-bold text-center mb-6">Функціональність проекту</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h3 className="card-title text-xl font-bold flex items-center">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white mr-2">1</div>
              Интерактивные фигуры
            </h3>
            <p>
              Различные геометрические фигуры с возможностью клика и отслеживания взаимодействий
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h3 className="card-title text-xl font-bold flex items-center">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white mr-2">2</div>
              Статистика кликов
            </h3>
            <p>
              Отслеживание количества кликов по каждой фигуре с визуализацией данных
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h3 className="card-title text-xl font-bold flex items-center">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white mr-2">3</div>
              Разные режимы отображения
            </h3>
            <p>
              Возможность переключения между горизонтальным и вертикальным режимами отображения
            </p>
          </div>
        </div>
      </div>

      {/* Задачи проекта */}
      <h2 className="text-3xl font-bold text-center mb-6">Задачи проекта</h2>
      <div className="w-full max-w-4xl mb-8">
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Задачи 1-2: Создание базовых компонентов
          </div>
          <div className="collapse-content bg-base-100 text-left"> 
            <ul className="list-disc list-inside space-y-2 p-4">
              <li>Создание компоненты Shape с передачей цвета и типа через props</li>
              <li>Создание компоненты ShapesLine для отображения набора фигур</li>
              <li>Демонстрация горизонтальной и вертикальной реализации</li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Задачи 3-4: Статистика и интерактивность
          </div>
          <div className="collapse-content bg-base-100 text-left"> 
            <ul className="list-disc list-inside space-y-2 p-4">
              <li>Отображение количества кликов по каждой фигуре</li>
              <li>Создание компоненты StatsBar для статистики кликов</li>
              <li>Реализация кнопки переключения вида ShapesLine</li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Задачи 5-7: Маршрутизация и состояние
          </div>
          <div className="collapse-content bg-base-100 text-left"> 
            <ul className="list-disc list-inside space-y-2 p-4">
              <li>Создание компонент Home и ErrorPage</li>
              <li>Реализация Header с навигационным меню</li>
              <li>Подключение библиотеки react-router</li>
              <li>Эффект "моргания" при клике на фигуру</li>
              <li>Рефакторинг с использованием React Context API</li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Задачи 8-10: API и публикация
          </div>
          <div className="collapse-content bg-base-100 text-left"> 
            <ul className="list-disc list-inside space-y-2 p-4">
              <li>Реализация API для управления статистикой</li>
              <li>Публикация приложения на Netlify</li>
              <li>Стилизация проекта с использованием DaisyUI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Подвал */}
      <div className="alert alert-info shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Выберите режим отображения в меню выше для начала работы с приложением</span>
        </div>
      </div>
    </div>
  );
};

export default Home;