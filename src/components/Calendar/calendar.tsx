import React, { useState } from "react";
import { Task } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks.store";
import ModalCalendar from "../Utilities/ModalCalendar";
import { modalActions } from "./../../store/Modal.store";

interface Event {
  id: string;
  title: string;
  time: string;
  date: string;
}

const CalendarList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [showMobileEvents, setShowMobileEvents] = useState(false);

  const [events] = useState<Event[]>([
    {
      id: "1",
      title: "Reunião com cliente",
      time: "09:00",
      date: "2025-01-10",
    },
    { id: "2", title: "Almoço de negócios", time: "12:30", date: "2025-01-15" },
    {
      id: "3",
      title: "Apresentação projeto",
      time: "15:00",
      date: "2025-01-15",
    },
    { id: "4", title: "Call com equipe", time: "10:00", date: "2025-01-20" },
    { id: "5", title: "Entrega relatório", time: "16:45", date: "2025-01-25" },
  ]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    )
      .toISOString()
      .split("T")[0];

    const dayEvents = events.filter((event) => event.date === selectedDate);
    setSelectedEvents(dayEvents);
    setShowMobileEvents(true);
    setSelectedDate(selectedDate);
    // setShowEventModal(true);
  };

  const closeModalCalendar = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewCalendarHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };

  return (
    <div className="max-w-8xl mx-auto p-2 sm:p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-8">
        <div className="flex justify-between items-center mb-5">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setMonth(currentDate.getMonth() - 1))
              )
            }
            className="p-2 sm:p-4 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full text-lg sm:text-xl"
          >
            ←
          </button>
          <h2 className="text-xl sm:text-2xl font-bold dark:text-white">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setMonth(currentDate.getMonth() + 1))
              )
            }
            className="p-2 sm:p-4 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full text-lg sm:text-xl"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-2 sm:mb-4">
          {days.map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-600 dark:text-gray-300 text-sm sm:text-lg"
            >
              {window.innerWidth < 640 ? day.slice(0, 3) : day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 sm:gap-4">
          {[...Array(firstDayOfMonth)].map((_, index) => (
            <div key={`empty-${index}`} className="h-14 sm:h-24"></div>
          ))}

          {[...Array(daysInMonth)].map((_, index) => {
            const day = index + 1;
            const currentDateString = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            )
              .toISOString()
              .split("T")[0];

            const dayEvents = events.filter(
              (event) => event.date === currentDateString
            );
            const hasEvents = dayEvents.length > 0;
            const isToday =
              day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            return (
              <div
                key={day}
                onClick={() => handleDayClick(day)}
                className={`h-14 sm:h-24 flex flex-col p-1 sm:p-2 rounded-lg cursor-pointer
                  ${
                    isToday
                      ? "bg-violet-600 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-slate-700"
                  }
                  transition-colors duration-200 dark:text-white border border-gray-200 dark:border-gray-700`}
              >
                <span className="text-sm sm:text-base font-medium">{day}</span>
                {hasEvents && (
                  <>
                    <div className="sm:hidden mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
                    </div>
                    <div className="hidden sm:flex flex-col mt-1 gap-1">
                      {dayEvents.map((event) => (
                        <div key={event.id} className="text-xs truncate">
                          {event.time} - {event.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showMobileEvents && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 p-4 rounded-t-2xl shadow-lg sm:hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Eventos do dia</h3>
            <button
              onClick={() => setShowMobileEvents(false)}
              className="text-gray-500"
            >
              ✕
            </button>
          </div>
          {selectedEvents.map((event) => (
            <div key={event.id} className="py-2 border-b">
              <div className="font-medium">{event.title}</div>
              <div className="text-sm text-gray-500">{event.time}</div>
            </div>
          ))}
        </div>
      )}

      {showEventModal && (
        <ModalCalendar
          onClose={closeModalCalendar}
          nameForm="Novo Agendamento"
          onConfirm={createNewCalendarHandler}
        />
      )}
    </div>
  );
};

export default CalendarList;
