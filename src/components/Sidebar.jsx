import { motion } from "framer-motion";

function Sidebar({
  tasks,
  darkMode,
  activeView,
  setActiveView,
}) {

  const menuItems = [
    {
      icon: "🌸",
      title: "Today",
    },
    {
      icon: "✨",
      title: "Upcoming",
    },
    {
      icon: "💖",
      title: "Important",
    },
    {
      icon: "✅",
      title: "Completed",
    },
  ];

  /* STATS */
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (

    <div
      className={`
        h-screen
        backdrop-blur-xl
        border-r
        p-6
        transition-all
        duration-500
        overflow-y-auto

        ${
          darkMode
            ? `
              bg-white/5
              border-white/10
            `
            : `
              bg-white/20
              border-pink-200/20
            `
        }
      `}
    >

      {/* HEADER */}
      <div className="mb-12">

        <h1
          className={`
            text-4xl
            font-bold

            ${
              darkMode
                ? "text-pink-200"
                : "text-fuchsia-700"
            }
          `}
        >
          Your Planner 🌸
        </h1>

        <p
          className={`
            mt-2
            text-lg

            ${
              darkMode
                ? "text-pink-100/70"
                : "text-fuchsia-900/70"
            }
          `}
        >
          Organize your life's tasks ✨
        </p>

      </div>

      {/* MENU */}
      <div className="space-y-4">

        {menuItems.map((item, index) => (

          <motion.div

            key={index}

            whileHover={{
              scale: 1.03,
              y: -4,
            }}

            onClick={() => setActiveView(item.title)}

            className={`
              flex
              items-center
              gap-4
              p-4
              rounded-3xl
              cursor-pointer
              transition
              duration-300

              ${
                activeView === item.title

                  ? darkMode

                    ? `
                      bg-pink-300/20
                      border
                      border-pink-200/20
                    `

                    : `
                      bg-pink-200/60
                    `

                  : darkMode

                  ? `
                    bg-white/5
                    hover:bg-white/10
                  `

                  : `
                    bg-pink-100/20
                    hover:bg-pink-200/50
                  `
              }
            `}
          >

            <span className="text-2xl">
              {item.icon}
            </span>

            <span
              className={`
                text-lg
                font-semibold

                ${
                  darkMode
                    ? "text-pink-100"
                    : "text-fuchsia-900"
                }
              `}
            >
              {item.title}
            </span>

          </motion.div>

        ))}

      </div>

      {/* STATS */}
      <div className="mt-12 grid grid-cols-2 gap-3">

        {/* TOTAL TASKS */}
        <motion.div

          whileHover={{ scale: 1.03 }}

          className="
            p-4
            rounded-3xl
            bg-gradient-to-br
            from-pink-300/30
            to-purple-300/30
            shadow-lg
            min-w-0
          "
        >

          <h3 className="text-fuchsia-900 font-bold text-sm">
            ✨ Total
          </h3>

          <p className="text-2xl font-bold mt-2 text-fuchsia-950 break-words">
            {totalTasks}
          </p>

        </motion.div>

        {/* COMPLETED */}
        <motion.div

          whileHover={{ scale: 1.03 }}

          className="
            p-4
            rounded-3xl
            bg-gradient-to-br
            from-green-300/30
            to-emerald-300/30
            shadow-lg
            min-w-0
          "
        >

          <h3 className="text-emerald-900 font-bold text-sm">
            ✅ Done
          </h3>

          <p className="text-2xl font-bold mt-2 text-emerald-950 break-words">
            {completedTasks}
          </p>

        </motion.div>

        {/* PENDING */}
        <motion.div

          whileHover={{ scale: 1.03 }}

          className="
            p-4
            rounded-3xl
            bg-gradient-to-br
            from-yellow-300/30
            to-orange-300/30
            shadow-lg
            min-w-0
          "
        >

          <h3 className="text-orange-900 font-bold text-sm">
            🌸 Pending
          </h3>

          <p className="text-2xl font-bold mt-2 text-orange-950 break-words">
            {pendingTasks}
          </p>

        </motion.div>

        {/* IMPORTANT */}
        <motion.div

          whileHover={{ scale: 1.03 }}

          className="
            p-4
            rounded-3xl
            bg-gradient-to-br
            from-red-300/30
            to-pink-300/30
            shadow-lg
            min-w-0
          "
        >

          <h3 className="text-red-900 font-bold text-sm">
            💖 Important
          </h3>

          <p className="text-2xl font-bold mt-2 text-red-950 break-words">
            {highPriorityTasks}
          </p>

        </motion.div>

      </div>

    </div>

  );
}

export default Sidebar;