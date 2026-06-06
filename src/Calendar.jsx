function Calendar({
  currentMonth,
  currentYear,
  setCurrentMonth,
  setCurrentYear,
  selectedDate,
  setSelectedDate,
  tasks,
  darkMode,
}) {

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const changeMonth = (direction) => {

    if (direction === "prev") {

      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }

    } else {

      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }

    }
  };

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  const formatDate = (day) => {

    const month = String(currentMonth + 1).padStart(2, "0");
    const date = String(day).padStart(2, "0");

    return `${currentYear}-${month}-${date}`;
  };

  return (

    <div
      className={`
        h-screen
        p-6
        backdrop-blur-xl
        border-r
        transition-all
        duration-500

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
      <div className="flex items-center justify-between mb-8">

        <button
          onClick={() => changeMonth("prev")}
          className={`
            w-11
            h-11
            rounded-2xl
            transition
            font-bold
            shadow-md
            hover:scale-105

            ${
              darkMode
                ? `
                  bg-white/10
                  hover:bg-white/20
                  text-pink-100
                `
                : `
                  bg-pink-100/40
                  hover:bg-pink-200/70
                  text-fuchsia-900
                `
            }
          `}
        >
          ←
        </button>

        <h2
          className={`
            text-3xl
            font-bold

            ${
              darkMode
                ? "text-pink-100"
                : "text-fuchsia-900"
            }
          `}
        >
          {monthNames[currentMonth]} {currentYear} ✨
        </h2>

        <button
          onClick={() => changeMonth("next")}
          className={`
            w-11
            h-11
            rounded-2xl
            transition
            font-bold
            shadow-md
            hover:scale-105

            ${
              darkMode
                ? `
                  bg-white/10
                  hover:bg-white/20
                  text-pink-100
                `
                : `
                  bg-pink-100/40
                  hover:bg-pink-200/70
                  text-fuchsia-900
                `
            }
          `}
        >
          →
        </button>

      </div>

      {/* DAYS */}
      <div
        className={`
          grid
          grid-cols-7
          text-center
          mb-5
          font-semibold

          ${
            darkMode
              ? "text-pink-100"
              : "text-fuchsia-900"
          }
        `}
      >

        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>

      </div>

      {/* CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-3">

        {days.map((day, index) => {

          if (!day) {
            return <div key={index}></div>;
          }

          const fullDate = formatDate(day);

          const hasTasks = tasks.some(
            (task) => task.date === fullDate
          );

          return (

            <div
              key={index}
              onClick={() => setSelectedDate(fullDate)}
              className={`
                aspect-square
                rounded-3xl
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                transition-all
                duration-300
                shadow-md
                hover:scale-105
                hover:-translate-y-1

                ${
                  selectedDate === fullDate

                    ? `
                      bg-gradient-to-br
                      from-pink-300
                      to-purple-300
                      text-fuchsia-950
                    `

                    : darkMode

                    ? `
                      bg-white/5
                      text-pink-100
                      hover:bg-white/10
                    `

                    : `
                      bg-pink-100/30
                      text-fuchsia-900
                    `
                }
              `}
            >

              <span className="font-bold text-lg">
                {day}
              </span>

              {hasTasks && (

                <div
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-rose-500
                    mt-1
                  "
                ></div>

              )}

            </div>

          );
        })}

      </div>

    </div>

  );
}

export default Calendar;