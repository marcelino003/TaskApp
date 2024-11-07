import React from "react";
import {
  FaCalendarDay,
  FaCheck,
  FaClock,
  FaStar,
  FaTasks,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "Tarefas para Hoje",
    path: "/today",
    icon: <FaCalendarDay />,
  },
  {
    name: "Todas as Tarefas",
    path: "/",
    icon: <FaTasks />,
  },
  {
    name: "Tarefas Importantes",
    path: "/important",
    icon: <FaStar />,
  },
  {
    name: "Tarefas Concluídas",
    path: "/completed",
    icon: <FaCheck />,
  },
  {
    name: "Tarefas Pendentes",
    path: "/uncompleted",
    icon: <FaClock />,
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${
                currentPath === link.path ? classActive : ""
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
