import React from "react";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const BtnCalendar: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onOpenModal = () => {
    // Redireciona para o caminho '/kanban'
    navigate("/calendar");
  };
  return (
    <>
      <button className={` ${className}`} onClick={onOpenModal}>
        <FaCalendar className="fill-violet-600 w-5 h-5 md:w-6 md:h-6 dark:fill-violet-800" />
      </button>
    </>
  );
};

export default BtnCalendar;
