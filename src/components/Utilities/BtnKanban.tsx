import React from "react";
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
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Agenda
      </button>
    </>
  );
};

export default BtnCalendar;
