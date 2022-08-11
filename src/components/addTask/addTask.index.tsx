import { useState } from "react";

import {
  Container,
  TitleTask,
  Wrap,
  Title,
  Number,
  Up,
  Down,
  AddNote,
  Cancel,
  Save,
  Notes,
  Note,
} from "./addTask.styled";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

interface Types {
  active: boolean;
  cancelClick: any;
}

export const AddTasks = ({ active, cancelClick}: Types) => {
  // Estado das Notações
  const [viewNotes, setViewNotes] = useState(false);
  // Estado do contador de pomodoro
  const [countPomo, setCountPomo] = useState(0);

  return (
    <>
      <Container active={active}>
        <TitleTask id="titleTask" placeholder="What are you working on ?" />
        <Wrap padding="0 20px">
          <Title>Est Pomodoros</Title>
          <Wrap margin="5px 0" display="flex" align="center" gap="5px">
            <Number value={countPomo} id="countPomo" />
            <Up onClick={() => setCountPomo(countPomo + 1)}>
              <AiFillCaretUp />
            </Up>
            <Down onClick={() => setCountPomo(countPomo - 1)}>
              <AiFillCaretDown />
            </Down>
          </Wrap>
        </Wrap>
        <Wrap height="30px" display="flex" padding="10px 20px">
          <AddNote onClick={() => setViewNotes(!viewNotes)}>+ Add Note</AddNote>
        </Wrap>
        <Notes active={viewNotes}>
          <Note id="notes" placeholder={"Add your notations here"} />
        </Notes>
        <Wrap
          margin="10px 0"
          padding="0px 20px"
          background="rgb(239, 239, 239)"
          radius="8px"
          height="4em"
          display="flex"
          align="center"
          justify="flex-end"
          gap="1em"
        >
          <Cancel onClick={cancelClick}>Cancel</Cancel>
          <Save>Save</Save>
        </Wrap>
      </Container>
    </>
  );
};
