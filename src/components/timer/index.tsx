import React, { JSXElementConstructor, useState } from "react";

/* Components */
import { Settings } from "../settings";

/* Styled Components */
import { Container, Wrap, Counter, Button } from "./styled";

export const Timer = ({ isDefault, isShort, isLong }: any) => {
  /* Seconds Timer */
  const [sec, setSec] = useState(0);
  /* Minutes Timer */
  const [min, setMin] = useState(25);
  /* State Timer */
  const [timeState, setTimeState] = useState(false);

  const startTimer = setInterval(() => {
    clearInterval(startTimer);
    if (timeState === true) {
      if (sec === 0) {
        if (min !== 0) {
          setSec(59);
          setMin(min - 1);
        } else {
          let minutes = 5;
          let seconds = 59;

          setSec(seconds);
          setMin(minutes - 1);
        }
      } else {
        setSec(sec - 1);
      }
    }
    if (timeState === false) {
      clearInterval(startTimer);
    }
  }, 1000);

  const timerSeconds = sec < 10 ? `0${sec}` : sec;
  const timerMinutes = min < 10 ? `0${min}` : min;
  return (
    <>
      <Container>
        <Wrap>
          <Counter>
            {timerMinutes}:{timerSeconds}
          </Counter>
          <Button onClick={() => setTimeState(!timeState)}>
            {timeState ? "Pause" : "Start"}
          </Button>
        </Wrap>
        <Settings
          DefaultClick={() => {
            let input = Number(
              (document.getElementById("pomodoro") as HTMLInputElement).value
            );
            setMin(input || 25);
            setSec(0);
          }}
          isDefault={isDefault}
          ShortClick={() => {
            let input = Number(
              (document.getElementById("shortBreak") as HTMLInputElement).value
            );
            setMin(input || 5);
            setSec(0);
          }}
          isShort={isShort}
          LongClick={() => {
            let input = Number(
              (document.getElementById("longBreak") as HTMLInputElement).value
            );
            setMin(input || 10);
            setSec(0);
          }}
          isLong={isLong}
        />
      </Container>
    </>
  );
};
