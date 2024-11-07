import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Tarefas de hoje", "Tarefas de hoje");

  return (
    <LayoutRoutes title="Tarefas para Hoje" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
