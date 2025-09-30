import { HomePage } from "./pages/Home/HomePage";
import { AddTodo } from "./pages/add-todo/AddTodo";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Countdown } from "./components/Countdown";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const { pathname } = useLocation();
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage tasks={tasks} setTasks={setTasks} Countdown={Countdown} />
          }
        />
        <Route
          path="add-todo"
          element={
            <AddTodo tasks={tasks} setTasks={setTasks} Countdown={Countdown} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
