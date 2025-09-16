import { HomePage } from "./pages/Home/HomePage";
import { AddTodo } from "./pages/add-todo/AddTodo";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function getTimeLeft(dueDate) {
    if (!dueDate) return "N/A";
    const now = new Date();
    const diff = new Date(dueDate) - now;

    if (diff <= 0) return "EXPIRED";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${days}D :${hours}H :${minutes}M`;
  }

  const { pathname } = useLocation();
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              tasks={tasks}
              setTasks={setTasks}
              getTimeLeft={getTimeLeft}
            />
          }
        />
        <Route
          path="add-todo"
          element={
            <AddTodo
              tasks={tasks}
              setTasks={setTasks}
              getTimeLeft={getTimeLeft}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
