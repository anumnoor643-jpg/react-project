function TaskModal({
  showModal,
  setShowModal,

  taskInput,
  setTaskInput,

  taskDescription,
  setTaskDescription,

  taskPriority,
  setTaskPriority,

  taskCategory,
  setTaskCategory,

  addTask,
}) {

  if (!showModal) return null;

  return (

    <div
      className="
        fixed
        inset-0
        bg-white/10
        backdrop-blur-md
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >

      <div
        className="
          w-full
          max-w-[550px]
          max-h-[90vh]
          overflow-y-auto
          rounded-[40px]
          bg-gradient-to-br
          from-pink-100/70
          via-purple-100/60
          to-pink-200/70
          backdrop-blur-2xl
          border
          border-white/30
          shadow-[0_0_40px_rgba(255,182,193,0.4)]
          p-8
        "
      >

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-4xl font-bold text-fuchsia-900">
              ✨ New Task
            </h2>

            <p className="text-fuchsia-800/70 mt-2">
              Plan your productivity 🌸
            </p>

          </div>

          <button
            onClick={() => setShowModal(false)}
            className="
              w-11
              h-11
              rounded-full
              bg-white/40
              hover:bg-pink-200/70
              transition
              text-fuchsia-900
              text-xl
              font-bold
            "
          >
            ✕
          </button>

        </div>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="🌸 Task title..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="
              w-full
              p-5
              rounded-3xl
              bg-white/40
              outline-none
              text-fuchsia-900
            "
          />

          <textarea
            placeholder="💖 Description..."
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            className="
              w-full
              h-32
              p-5
              rounded-3xl
              bg-white/40
              outline-none
              resize-none
              text-fuchsia-900
            "
          />

          <div>

            <p className="text-fuchsia-900 font-semibold mb-3">
              ✨ Priority
            </p>

            <div className="flex gap-3 flex-wrap">

              {["High", "Medium", "Low"].map((priority) => (

                <button
                  key={priority}
                  type="button"
                  onClick={() => setTaskPriority(priority)}
                  className={`
                    px-5
                    py-3
                    rounded-full
                    font-semibold
                    transition
                    shadow-md
                    ${
                      taskPriority === priority
                        ? "bg-pink-300 text-fuchsia-950 scale-105"
                        : "bg-white/40 text-fuchsia-900"
                    }
                  `}
                >

                  {priority === "High" && "💖"}
                  {priority === "Medium" && "✨"}
                  {priority === "Low" && "🌸"}

                  {" "}
                  {priority}

                </button>

              ))}

            </div>

          </div>

          <div>

            <p className="text-fuchsia-900 font-semibold mb-3">
              ☁️ Category
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "Study",
                "Work",
                "Personal",
                "Shopping",
              ].map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() => setTaskCategory(category)}
                  className={`
                    px-5
                    py-3
                    rounded-full
                    font-semibold
                    transition
                    shadow-md
                    ${
                      taskCategory === category
                        ? "bg-purple-300 text-fuchsia-950 scale-105"
                        : "bg-white/40 text-fuchsia-900"
                    }
                  `}
                >

                  {category === "Study" && "📚"}
                  {category === "Work" && "💼"}
                  {category === "Personal" && "🏡"}
                  {category === "Shopping" && "🛍"}

                  {" "}
                  {category}

                </button>

              ))}

            </div>

          </div>

          <button
            onClick={() => {
              addTask();
              setShowModal(false);
            }}
            className="
              w-full
              py-5
              rounded-3xl
              bg-gradient-to-r
              from-pink-300
              via-purple-300
              to-pink-300
              text-fuchsia-950
              font-bold
              text-xl
              shadow-lg
              hover:scale-[1.02]
              transition
              mt-4
            "
          >
            💖 Save Task
          </button>

        </div>

      </div>

    </div>

  );
}

export default TaskModal;