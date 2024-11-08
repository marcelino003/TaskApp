import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Edit } from "../../../assets/edit.svg";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalConfirm from "../../Utilities/ModalConfirm";
import ModalDirectory from "../../Utilities/ModalDirectory";

const ItemDirectory: React.FC<{ dir: string; classActive: string }> = ({
  dir,
  classActive,
}) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const dispatch = useAppDispatch();

  const [modalIsShown, setModalIsShown] = useState<boolean>(false);
  const [modalDirIsShown, setModalDirIsShown] = useState<boolean>(false);

  const closeModalDirectoryHandler = () => {
    setModalDirIsShown(false);
  };

  const deleteDirectoryHandler = () => {
    dispatch(tasksActions.deleteDirectory(dir));
  };

  const confirmEditDirNameHandler = (dirName: string) => {
    dispatch(
      tasksActions.editDirectoryName({
        previousDirName: dir,
        newDirName: dirName,
      })
    );
  };

  return (
    <>
      {modalDirIsShown && (
        <ModalDirectory
          onClose={closeModalDirectoryHandler}
          onConfirm={confirmEditDirNameHandler}
          dirName={dir}
          title="Editar Diretório"
          btnText="Edit"
        />
      )}
      {modalIsShown && (
        <ModalConfirm
          onClose={() => setModalIsShown(false)}
          onConfirm={deleteDirectoryHandler}
          text="Este diretório e todas as suas tarefas serão excluídas."
        />
      )}
      <li
        className={`flex items-center pr-4 pl-9 py-2 itemDirectory ${
          currentPath === "/dir/" + dir ? classActive : ""
        }`}
      >
        <NavLink
          to={`/dir/${dir}`}
          title={dir}
          className="hover:text-rose-600 dark:hover:text-slate-200 transition text-ellipsis whitespace-nowrap overflow-hidden max-w-[7rem]"
        >
          {dir}
        </NavLink>

        {dir !== "Pessoal" && (
          <div className="ml-auto buttonsDir">
            <button
              title="Editar Diretório"
              onClick={() => setModalDirIsShown(true)}
            >
              <Edit className="w-5 h-5 mr-2" />
            </button>
            <button
              title="delete directory"
              onClick={() => setModalIsShown(true)}
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default ItemDirectory;
