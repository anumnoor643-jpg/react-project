import {
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

import { motion } from "framer-motion";

function TaskCard({
  task,
  deleteTask,
  toggleComplete,
  darkMode,
}) {

  const priorityColors = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Low: "bg-green-500/20 text-green-400",
  };

  const categoryIcons = {
    Study: "📚",
    Work: "💼",
    Personal: "🏡",
    Shopping: "🛍",
  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      exit={{
        opacity: 0,
        x: 100,
      }}

      transition={{
        duration: 0.3,
      }}

      whileHover={{
        scale: 1.02,
      }}

      className={`
        backdrop-blur-xl
        rounded-3xl
        p-5
        shadow-lg
        transition
        border

        ${
          darkMode
            ? `
              bg-white/5
              border-white/10
            `
            : `
              bg-white/20
              border-white/20
            `
        }
      `}
    >

      <div className="flex items-start justify-between gap-4">

        {/* LEFT SIDE */}
        <div className="flex gap-4 flex-1">

          {/* COMPLETE BUTTON */}
          <button
            onClick={() => toggleComplete(task.id)}
            className={`
              w-7
              h-7
              mt-1
              rounded-full
              border-2
              flex
              items-center
              justify-center
              shrink-0

              ${
                darkMode
                  ? `
                    border-pink-200
                    bg-white/10
                  `
                  : `
                    border-pink-400
                    bg-white/40
                  `
              }
            `}
          >

            {task.completed ? (
              <FaCheckCircle className="text-pink-500 text-sm" />
            ) : null}

          </button>

          {/* CONTENT */}
          <div className="flex-1">

            {/* TITLE */}
            <h2
              className={`
                text-xl
                font-bold

                ${
                  task.completed

                    ? darkMode
                      ? "line-through text-pink-100/40"
                      : "line-through text-fuchsia-700/50"

                    : darkMode
                      ? "text-pink-100"
                      : "text-fuchsia-950"
                }
              `}
            >

              {task.title}

            </h2>

            {/* DESCRIPTION */}
            <p
              className={`
                mt-2

                ${
                  darkMode
                    ? "text-pink-100/70"
                    : "text-fuchsia-900/70"
                }
              `}
            >

              {task.description}

            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mt-4">

              {/* PRIORITY */}
              <motion.div

                whileTap={{ scale: 0.95 }}

                className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  ${priorityColors[task.priority]}
                `}
              >

                {task.priority === "High" && "💖"}
                {task.priority === "Medium" && "✨"}
                {task.priority === "Low" && "🌸"}

                {" "}
                {task.priority}

              </motion.div>

              {/* CATEGORY */}
              <motion.div

                whileTap={{ scale: 0.95 }}

                className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold

                  ${
                    darkMode
                      ? `
                        bg-purple-300/20
                        text-pink-100
                      `
                      : `
                        bg-purple-200/50
                        text-fuchsia-900
                      `
                  }
                `}
              >

                {categoryIcons[task.category]}{" "}
                {task.category}

              </motion.div>

            </div>

          </div>

        </div>

        {/* DELETE BUTTON */}
        <motion.button

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}

          onClick={() => deleteTask(task.id)}

          className={`
            px-4
            py-3
            rounded-2xl
            transition
            shrink-0

            ${
              darkMode
                ? `
                  bg-red-400/10
                  text-red-300
                  hover:bg-red-400/20
                `
                : `
                  bg-pink-200/50
                  text-fuchsia-900
                  hover:bg-pink-300/70
                `
            }
          `}
        >
          <FaTrash />
        </motion.button>

      </div>

    </motion.div>

  );
}

export default TaskCard;