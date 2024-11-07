import React from "react";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize suas Tarefas", "Todas ás Tarefas");
  return <LayoutRoutes title="Todas as Tarefas" tasks={tasks}></LayoutRoutes>;
};

export default Home;
