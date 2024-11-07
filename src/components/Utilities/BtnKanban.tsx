import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const BtnKanban: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onOpenModal = () => {
    // Redireciona para o caminho '/kanban'
    navigate("/kanban");
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Kanban
      </button>
    </>
  );
};

export default BtnKanban;
