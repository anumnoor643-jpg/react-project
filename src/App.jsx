import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import TaskPanel from "./components/TaskPanel";

function App() {

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    today.getMonth()
  );

  const [currentYear, setCurrentYear] = useState(
    today.getFullYear()
  );

  const formatToday = () => {

    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${today.getFullYear()}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(
    formatToday()
  );

  /* ACTIVE VIEW */
  const [activeView, setActiveView] = useState("Today");

  /* TASKS */
  const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem("kawaiiTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "kawaiiTasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  /* DARK MODE */
  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem("kawaiiTheme");

    return savedTheme === "dark";

  });

  useEffect(() => {

    localStorage.setItem(
      "kawaiiTheme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  return (

    <div
      className={`
        min-h-screen
        transition-all
        duration-500

        ${
          darkMode
            ? `
              bg-gradient-to-br
              from-[#1e1b2e]
              via-[#2a243f]
              to-[#15131f]
            `
            : `
              bg-gradient-to-br
              from-pink-200
              via-purple-200
              to-blue-200
            `
        }
      `}
    >

      {/* THEME BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`
          fixed
          top-4
          right-10
          z-50
          px-4
          py-2
          rounded-full
          backdrop-blur-xl
          border
          shadow-lg
          hover:scale-105
          transition
          font-semibold

          ${
            darkMode
              ? `
                bg-white/10
                border-white/10
                text-pink-100
              `
              : `
                bg-white/20
                border-white/20
                text-fuchsia-900
              `
          }
        `}
      >

        {darkMode ? "☀️ Light" : "🌙 Dark"}

      </button>

      {/* MAIN LAYOUT */}
     <div
  className="
    flex
    flex-col
    md:grid
    md:grid-cols-[260px_420px_1fr]
  "
>

        <Sidebar
          tasks={tasks}
          darkMode={darkMode}
          activeView={activeView}
          setActiveView={setActiveView}
        />

        <Calendar
          currentMonth={currentMonth}
          currentYear={currentYear}
          setCurrentMonth={setCurrentMonth}
          setCurrentYear={setCurrentYear}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          tasks={tasks}
          darkMode={darkMode}
        />

        <TaskPanel
          selectedDate={selectedDate}
          tasks={tasks}
          setTasks={setTasks}
          darkMode={darkMode}
          activeView={activeView}
        />

      </div>
<Footer darkMode={darkMode} />
    </div>

  );
}

export default App;
