import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CalendarList from "../Calendar/calendar";
import Directory from "../Routes/Directory";
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import SearchResults from "../Routes/SearchResults";
import TaskOnly from "../Routes/TaskOnly";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";

interface TasksSectionProps {
  className?: string;
}

const TasksSection: React.FC<TasksSectionProps> = ({ className = "" }) => {
  return (
    <main
      className={`pt-5 pb-8 sm:pb-16 px-3 md:px-8 w-full min-h-screen ${className}`}
    >
      <HeaderTasks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<TodaysTasks />} />
        <Route path="/important" element={<ImportantTasks />} />
        <Route path="/calendar" element={<CalendarList />} />
        <Route
          path="/completed"
          element={<DoneTasks done={true} title="Tarefas Concluídas" />}
        />
        <Route
          path="/uncompleted"
          element={<DoneTasks done={false} title="Tarefas Incompletas" />}
        />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/dir/:dir" element={<Directory />} />
        <Route path="/task/:taskId" element={<TaskOnly />} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
