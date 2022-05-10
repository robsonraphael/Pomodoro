import React from "react";
import { Button } from "./styled";

interface PropsStart {
  color: string;
  background: string;
  text: string;
  execute: any;
}

const Start = (props: PropsStart) => {
  return (
    <Button color={props.color} background={props.background} onClick={props.execute}>
      {props.text}
    </Button>
  );
};

export default Start;
