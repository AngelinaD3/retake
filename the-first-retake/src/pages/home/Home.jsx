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
                Горизонтальний вид
              </Link>
              <Link to="/vertical" className="btn btn-secondary">
                Вертикальний вид
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
    </div>
  );
};

export default Home;