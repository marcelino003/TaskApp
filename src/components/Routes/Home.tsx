import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize suas Tarefas", "Todas ás Tarefas");
  return <LayoutRoutes title="Todas ás Tarefas" tasks={tasks}></LayoutRoutes>;
};

export default Home;
