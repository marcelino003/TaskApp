import React from "react";
import avatar1 from "../../assets/avatar-1.jpg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Utilities/BtnAddTask";
import Notification from "./Notification";
import SearchField from "./SearchField";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthNames: string[] = [
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

  const todayDate = `${day.toString().padStart(2, "0")} de ${
    monthNames[month - 1]
  } de ${year}`;

  const dateTimeFormat = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex bg-slate-50 shadow-lg shadow-slate-300 dark:shadow-slate-800 px-4 py-3 rounded-xl">
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <MenuIcon />
      </button>
      <SearchField />
      <div className="text-center">
        <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
          TaskApp
        </span>
        <time dateTime={dateTimeFormat}>{todayDate}</time>
      </div>
      <div className="flex flex-1">
        <Notification />
        <BtnAddTask className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />

        <button onClick={openMenuAccountHandler} className="block xl:hidden">
          <img
            src={avatar1}
            alt="cat"
            className="w-10 h-10 rounded-full ml-4"
          />
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
