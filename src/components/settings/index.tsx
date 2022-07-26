import React from "react";
import { Container, Options } from "./styled";

export const Settings = ({
  DefaultClick,
  isDefault,
  ShortClick,
  isShort,
  LongClick,
  isLong,
}: any) => {
  return (
    <>
      <Container>
        <Options
          bg="Default"
          onClick={() => {
            DefaultClick();
            isDefault();
          }}
        >
          Pomodoro
        </Options>
        <Options
          bg="Short"
          onClick={() => {
            ShortClick();
            isShort();
          }}
        >
          Short Break
        </Options>
        <Options
          bg="Long"
          onClick={() => {
            LongClick();
            isLong();
          }}
        >
          Long Break
        </Options>
      </Container>
    </>
  );
};
