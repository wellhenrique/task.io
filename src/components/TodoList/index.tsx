import { useState } from "react";
import expandImg from "../../assets/expandir.svg";
import trashImg from "../../assets/trash.svg";
import { Summary } from "../Summary";

import { Container } from "./styles";

export function TodoList() {
  const [openCompleteTask, setOpenCompleteTask] = useState(false);
  const [openPendingTask, setOpenPendingTask] = useState(false);
  const [openIncompleteTask, setOpenIncompleteTask] = useState(false);

  function handleClickTask(element, elementIsOpen) {
    const helper = elementIsOpen === true ? false : true;
    console.log(element);
    if (element === "openCompleteTask") {
      setOpenCompleteTask(helper);
    } else if (element === "openPendingTask") {
      setOpenPendingTask(helper);
    } else if (element === "openIncompleteTask") {
      setOpenIncompleteTask(helper);
    }
  }

  return (
    <Container>
      <div>
        <h1 className="completed">Tarefas já Concluidas</h1>
        <div className="TaskControl">
          <button
            className={openCompleteTask ? "active" : "desable"}
            onClick={() =>
              handleClickTask("openCompleteTask", openCompleteTask)
            }
          >
            <img className="expand" src={expandImg} alt="" />
          </button>
          <img className="trash" src={trashImg} alt="" />
        </div>
      </div>
      <Summary isOpen={openCompleteTask ? "TaskActive" : "TaskDesable"} />
      <div>
        <h1 className="pending">Tarefas em Andamento</h1>
        <div className="TaskControl">
          <button
            className={openPendingTask ? "active" : "desable"}
            onClick={() => handleClickTask("openPendingTask", openPendingTask)}
          >
            <img className="expand" src={expandImg} alt="" />
            <img src={trashImg} alt="" />
          </button>
        </div>
      </div>
      <Summary isOpen={openPendingTask ? "TaskActive" : "TaskDesable"} />
      <div>
        <h1 className="incomplete">Tarefas não finalizadas</h1>
        <div className="TaskControl">
          <button
            className={openIncompleteTask ? "active" : "desable"}
            onClick={() =>
              handleClickTask("openIncompleteTask", openIncompleteTask)
            }
          >
            <img className="expand" src={expandImg} alt="" />
            <img src={trashImg} alt="" />
          </button>
        </div>
      </div>
      <Summary isOpen={openIncompleteTask ? "TaskActive" : "TaskDesable"} />
    </Container>
  );
}
