import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";

function TaskPanel({
  selectedDate,
  tasks,
  setTasks,
  darkMode,
  activeView,
}) {

  const [taskInput, setTaskInput] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskCategory, setTaskCategory] = useState("Study");

  const [showModal, setShowModal] = useState(false);

  /* SEARCH + FILTER */
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addTask = () => {

    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      date: selectedDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskInput("");
    setTaskDescription("");
    setTaskPriority("Medium");
    setTaskCategory("Study");
  };

  const toggleTask = (id) => {

    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {

    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(filteredTasks);
  };

  /* FILTER LOGIC */
  const today = new Date()
    .toISOString()
    .split("T")[0];

  const filteredTasks = tasks.filter((task) => {

    let matchesView = false;

    if (activeView === "Today") {
      matchesView = task.date === selectedDate;
    }

    else if (activeView === "Upcoming") {
      matchesView = task.date > today;
    }

    else if (activeView === "Important") {
      matchesView = task.priority === "High";
    }

    else if (activeView === "Completed") {
      matchesView = task.completed;
    }

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : task.category === selectedCategory;

    return (
      matchesView &&
      matchesSearch &&
      matchesCategory
    );
  });

  return (

    <div className="h-screen p-8 overflow-y-auto">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h1
            className={`
              text-4xl
              font-bold

              ${
                darkMode
                  ? "text-pink-100"
                  : "text-fuchsia-900"
              }
            `}
          >
            {activeView} Tasks 🌸
          </h1>

          <p
            className={`
              mt-2
              text-lg

              ${
                darkMode
                  ? "text-pink-100/70"
                  : "text-fuchsia-800/70"
              }
            `}
          >
            Tasks for {selectedDate} ✨
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="
            px-6
            py-4
            rounded-3xl
            bg-gradient-to-r
            from-pink-300
            to-purple-300
            text-fuchsia-950
            font-bold
            shadow-lg
            hover:scale-105
            transition
          "
        >
          ✨ New Task
        </button>

      </div>

      {/* SEARCH + FILTER */}
      <div
        className={`
          mb-8
          p-5
          rounded-[32px]
          backdrop-blur-2xl
          border
          shadow-lg
          flex
          flex-col
          gap-5
          transition-all

          ${
            darkMode
              ? `
                bg-white/5
                border-white/10
              `
              : `
                bg-white/30
                border-white/30
              `
          }
        `}
      >

        {/* SEARCH */}
        <div className="relative flex-1">

          <input
            type="text"
            placeholder="🔍 Search your tasks..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className={`
              w-full
              p-4
              pl-6
              rounded-2xl
              outline-none
              border
              shadow-md
              transition-all

              ${
                darkMode
                  ? `
                    bg-white/5
                    border-white/10
                    text-pink-100
                    placeholder:text-pink-100/40
                    focus:bg-white/10
                  `
                  : `
                    bg-white/50
                    border-pink-200/40
                    text-fuchsia-900
                    focus:bg-white/70
                  `
              }
            `}
          />

        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3">

          {[
            {
              icon: "🌸",
              name: "All",
            },
            {
              icon: "📚",
              name: "Study",
            },
            {
              icon: "💼",
              name: "Work",
            },
            {
              icon: "🏡",
              name: "Personal",
            },
            {
              icon: "🛍",
              name: "Shopping",
            },
          ].map((category) => (

            <button
              key={category.name}

              onClick={() =>
                setSelectedCategory(category.name)
              }

              className={`
                px-5
                py-3
                rounded-2xl
                font-semibold
                transition-all
                hover:scale-105
                shadow-md

                ${
                  selectedCategory === category.name

                    ? `
                      bg-gradient-to-r
                      from-pink-300
                      to-purple-300
                      text-fuchsia-950
                    `

                    : darkMode

                    ? `
                      bg-white/5
                      text-pink-100
                      border
                      border-white/10
                    `

                    : `
                      bg-white/50
                      text-fuchsia-900
                    `
                }
              `}
            >

              {category.icon} {category.name}

            </button>

          ))}

        </div>

      </div>

      {/* TASKS */}
      <div className="space-y-5">

        {filteredTasks.length === 0 ? (

          <div
            className={`
              backdrop-blur-xl
              rounded-3xl
              p-10
              text-center
              shadow-lg
              transition-all
              duration-500

              ${
                darkMode
                  ? "bg-white/5"
                  : "bg-white/20"
              }
            `}
          >

            <h2
              className={`
                text-2xl
                font-bold

                ${
                  darkMode
                    ? "text-pink-100"
                    : "text-fuchsia-900"
                }
              `}
            >
              🌸 No Tasks Found
            </h2>

            <p
              className={`
                mt-3

                ${
                  darkMode
                    ? "text-pink-100/70"
                    : "text-fuchsia-800/70"
                }
              `}
            >
              Try changing filters or add new tasks ✨
            </p>

          </div>

        ) : (

          filteredTasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleTask}
              darkMode={darkMode}
            />

          ))

        )}

      </div>

      {/* MODAL */}
      <TaskModal
        showModal={showModal}
        setShowModal={setShowModal}

        taskInput={taskInput}
        setTaskInput={setTaskInput}

        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}

        taskPriority={taskPriority}
        setTaskPriority={setTaskPriority}

        taskCategory={taskCategory}
        setTaskCategory={setTaskCategory}

        addTask={addTask}

        darkMode={darkMode}
      />

    </div>

  );
}

export default TaskPanel;