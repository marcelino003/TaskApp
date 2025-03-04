import React from "react";
import avatar1 from "../../assets/avatar-1..png";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import DarkMode from "../AccountSection/DarkMode";
import Calendar from "./Calendar";
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
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex bg-slate-50 dark:bg-slate-800 border border-white px-4 py-3 rounded-xl">
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
      <div className="flex flex-1 items-center justify-end">
        {/* Ícone de notificação e avatar ao lado */}
        <div className="flex items-center">
          <DarkMode />
          <Notification />
          <Calendar />

          <button onClick={openMenuAccountHandler} className="ml-4">
            <img
              src={avatar1}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderTasks;
