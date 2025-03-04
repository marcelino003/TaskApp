import React, { useRef } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTodayTasks from "../hooks/useTodayTasks"; // Reusando hook para pegar as tarefas de hoje
import useVisibility from "../hooks/useVisibility";

const classHasUpcomingEvent =
  "after:content-[''] after:w-2 after:h-2 after:bg-blue-500 block after:rounded-full after:absolute after:bottom-3/4 after:left-3/4"; // Indicador de evento

const CalendarNotification: React.FC = () => {
  const refBtnCalendar = useRef<HTMLButtonElement>(null);

  const {
    elementIsVisible: calendarIsVisible,
    showElement: showCalendarEvents,
  } = useVisibility([refBtnCalendar.current!]);

  const todaysTasks = useTodayTasks(); // Obtendo tarefas de hoje

  const tasksToShow = todaysTasks.slice(0, 3); // Exibindo até 3 tarefas

  const moreTasksToShow = todaysTasks.length > tasksToShow.length;

  return (
    <div className="sm:mr-4 md:mr-6 ml-auto grid place-items-center relative">
      <button
        ref={refBtnCalendar}
        onClick={showCalendarEvents}
        className={`relative ${
          tasksToShow.length ? classHasUpcomingEvent : ""
        }`}
        title="ver eventos do calendário"
      >
        <FaCalendar className="fill-gray-600 w-5 h-5 md:w-6 md:h-6 dark:fill-violet-800" />
      </button>
      {calendarIsVisible && (
        <div className="absolute bg-slate-100 dark:bg-slate-800 top-full rounded-md right-0 p-3 w-52 border border-slate-300 dark:border-slate-700">
          {todaysTasks.length > 0 ? (
            <div>
              <span className="dark:text-slate-200 font-medium">
                {todaysTasks.length} Evento(s) no calendário:
              </span>
              <ul>
                {tasksToShow.map((task) => (
                  <li key={task.id} className="py-1">
                    <Link
                      to={`/task/${task.id}`}
                      className="hover:text-slate-200 transition"
                    >
                      {task.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {moreTasksToShow && (
                <a
                  href="/calendar"
                  className="transition block w-full rounded-md p-1 bg-blue-100 text-blue-600 dark:text-slate-200 dark:bg-slate-700/[.3] text-center"
                >
                  Ver mais eventos
                </a>
              )}
            </div>
          ) : (
            <p>Sem eventos</p>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(CalendarNotification);
