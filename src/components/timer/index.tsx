import React from "react";

/* StyledComponents */
import { Container, CountingTime } from "./styled";

interface PropsText{
  color: string;
  text: number;
}

const Timer = (props : PropsText) => {
  return (
    <Container>
      <CountingTime color={props.color}>
        <h1>{props.text}</h1>
      </CountingTime>
    </Container>
  )
};

export default Timer;