import React, { useState } from "react";

/* Components */
import { Task } from "../task";
import { AddTasks} from "../addTask";

/* Icons */
import { MdMoreVert } from "react-icons/md";
import { BsTrash, BsPlusCircleFill } from "react-icons/bs";

/* Styled Components */
import {
  Container,
  Wrap,
  Title,
  Button,
  Menu,
  Option,
  ViewTasks,
  Add,
} from "./styled";

export const Tasks = () => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(true);
  const [addTasksIsOpen, setAddTasksIsOpen] = useState(false);

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

  const addTasks = () => {
    setAddTasksIsOpen(!addTasksIsOpen);
  }

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
      <ViewTasks />
      <Add onClick={() => addTasks()}>
        <BsPlusCircleFill size="1.1em" />
        Add Task
      </Add>
      <AddTasks active={addTasksIsOpen} cancelClick={() => setAddTasksIsOpen(!addTasksIsOpen)}/>
    </Container>
  );
};
