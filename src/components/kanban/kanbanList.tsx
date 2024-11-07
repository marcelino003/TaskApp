import React, { useState } from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const KanbanList: React.FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      status: "Nova Tarefa",
      dueDate: "2024-11-15",
    },
    {
      id: 2,
      title: "Tarefa 2",
      status: "Em Andamento",
      dueDate: "2024-11-20",
    },
    {
      id: 3,
      title: "Tarefa 3",
      status: "Concluídas",
      dueDate: "2024-11-10",
    },
    {
      id: 4,
      title: "Tarefa 3",
      status: "Concluídas",
      dueDate: "2024-11-10",
    },
  ]);

  const moveTask = (taskId: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
        Kanban de Tarefas
      </h1>

      <div className="flex space-x-4 p-4 h-[75vh]">
        <div className="flex-1 bg-slate-50 rounded-lg p-4 border-2 overflow-y-auto">
          <div className="bg-indigo-600 text-white p-2 rounded-t-lg mb-4">
            <h2 className="font-bold text-lg text-center">Nova Tarefa</h2>
          </div>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === "Nova Tarefa")
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-violet-500 text-white p-4 rounded-2xl"
                >
                  <p className="font-bold">{task.title}</p>
                  <div className="flex items-center text-sm mt-2">
                    <FaRegCalendarAlt className="mr-2" />
                    <span>Entrega: {task.dueDate}</span>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <FaRegClock className="mr-2" />
                    <span>Criado em: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex-1 bg-slate-50 rounded-lg p-4 border-2 overflow-y-auto">
          <div className="bg-yellow-600 text-white p-2 rounded-t-lg mb-4">
            <h2 className="font-bold text-lg text-center">Em Andamento</h2>
          </div>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === "Em Andamento")
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-violet-500 text-white p-4 rounded-2xl"
                >
                  <p className="font-bold">{task.title}</p>
                  <div className="flex items-center text-sm mt-2">
                    <FaRegCalendarAlt className="mr-2" />
                    <span>Entrega: {task.dueDate}</span>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <FaRegClock className="mr-2" />
                    <span>Criado em: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex-1 bg-slate-50 rounded-lg p-4 border-2 overflow-y-auto">
          <div className="bg-green-600 text-white p-2 rounded-t-lg mb-4">
            <h2 className="font-bold text-lg text-center">Concluídas</h2>
          </div>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === "Concluídas")
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-violet-500 text-white p-4 rounded-2xl"
                >
                  <p className="font-bold">{task.title}</p>
                  <div className="flex items-center text-sm mt-2">
                    <FaRegCalendarAlt className="mr-2" />
                    <span>Entrega: {task.dueDate}</span>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <FaRegClock className="mr-2" />
                    <span>Criado em: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KanbanList;
