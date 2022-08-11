import { useState} from "react";
import { AddTasks } from "../addTask/addTask.index";
import { MdMoreVert } from "react-icons/md";
import { BsTrash, BsPlusCircleFill } from "react-icons/bs";

import {
  Container,
  Wrap,
  Title,
  Button,
  Menu,
  Option,
  ViewTasks,
  Add,
} from "./tasks.styled";

export const Tasks = () => {
  // Estado da configuração da tarefa
  const [settingsIsOpen, setSettingsIsOpen] = useState(true);
  // Visibilidade 
  const [display, setDisplay] = useState(false);
  // Lista de Tarefas
  const [tasks, setTasks] = useState([]);

  // Função que muda o estado das configurações
  const openSettings = () => {
    const span = document.getElementById("more") as HTMLElement;
    span.style.transition = "ease-in-out 0.35s";
    if (settingsIsOpen === true) {
      span.style.transform = "rotate(90deg)";
      setSettingsIsOpen(!settingsIsOpen);
    } else {
      span.style.transform = "rotate(0deg)";
      setSettingsIsOpen(!settingsIsOpen);
    }
  };

  // Função que muda o estado do Adicionar Tarefas
  const addTasks = () => {
    setDisplay(!display);
  };

  return (
    <Container>
      <Wrap>
        <Title>Tasks</Title>
        <Button onClick={() => openSettings()}>
          <MdMoreVert id="more" />
        </Button>
      </Wrap>
      <Menu active={!settingsIsOpen}>
        <Option>
          <BsTrash />
          Clear all tasks
        </Option>
      </Menu>
      <ViewTasks>
        {tasks.map((item, index) => (<div>{item}</div>))}
      </ViewTasks>
      <Add onClick={() => addTasks()}>
        <BsPlusCircleFill size="1.1em" />
        Add Task
      </Add>
      <AddTasks
        active={display}
        cancelClick={() => setDisplay(!display)}
      />
    </Container>
  );
};
