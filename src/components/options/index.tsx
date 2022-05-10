import React from "react";
import { Container, Button } from "./styled";

interface MyPropsOption {
  color: string;
  background: string;
}

const Option = (props: MyPropsOption) => {
  return (
    <Container>
      <Button background={props.background} color={props.color}>Pomdoro</Button>
      <Button background={props.background} color={props.color}>Break</Button>
      <Button background={props.background} color={props.color}>Long Break</Button>
    </Container>
  );
};

export default Option;
