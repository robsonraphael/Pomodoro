import React from "react";

/* Styled Components*/
import {
  Container,
  Input,
  Wrap,
  Wrapper,
  Title,
  Number,
  Up,
  Down,
  Link,
  Cancel,
  Save,
  Bottom,
} from "./styled";

/* Icons */
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export const AddTasks = ({ active, cancelClick }: any) => {
  const append = () => {
    let input = document.getElementById("pomo") as HTMLInputElement;
    input.value++
  };
  const remove = () => {
    let input = document.getElementById("pomo") as HTMLInputElement;
    input.value--
  };

  return (
    <>
      <Container active={active}>
        <Input />
        <Wrap>
          <Title>Est Pomodoros</Title>
          <span>
            <Number />
            <Up onClick={() => append()}>
              <AiFillCaretUp />
            </Up>
            <Down onClick={() => remove()}>
              <AiFillCaretDown />
            </Down>
          </span>
        </Wrap>
        <Wrapper>
          <Link>+ Add Note</Link>
        </Wrapper>
        <Bottom>
          <Cancel onClick={cancelClick}>Cancel</Cancel>
          <Save>Save</Save>
        </Bottom>
      </Container>
    </>
  );
};
