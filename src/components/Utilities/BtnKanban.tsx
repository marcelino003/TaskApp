import React from "react";
import { useAppDispatch } from "../../store/hooks";

const BtnKanban: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    alert("Em desenvolvimento");
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
