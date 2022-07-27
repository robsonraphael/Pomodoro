import React from "react";

/* Components */
import {
  Container,
  Wrap,
  Left,
  Title,
  Right,
  Amount,
  Button,
  Notes,
} from "./styled";

/* Icons */
import { MdMoreVert } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export const Task = ({ title, amount, notes }: any) => {
  return (
    <Container>
      <Wrap>
        <Left>
          <FaCheckCircle />
          <Title>{title}</Title>
        </Left>
        <Right>
          <Amount>{amount}</Amount>
          <Button>
            <MdMoreVert />
          </Button>
        </Right>
      </Wrap>
      <Notes>{notes}</Notes>
    </Container>
  );
};
