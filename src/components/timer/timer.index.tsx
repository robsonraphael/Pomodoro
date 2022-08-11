import { useState } from "react";
import { Container, Circle, Wrap, Display, Button } from "./timer.styled";
import { Breaks } from "../breaks/breaks.index";
import { Tasks } from "../tasks/tasks.index";

export const Timer = ({ isDefault, isShort, isLong }: any) => {
  // Estado dos segundos
  const [sec, setSec] = useState(0);
  // Estado dos minutos
  const [min, setMin] = useState(25);
  // Estado do contador
  const [timeState, setTimeState] = useState(false);

  // Função que inicia o contador
  const startTimer = setInterval(() => {
    clearInterval(startTimer);
    if (timeState === true) {
      if (sec === 0) {
        if (min !== 0) {
          setSec(59);
          setMin(min - 1);
        } else {
          let minutes: number = 5;
          let seconds: number = 59;

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

  const timerSeconds: number | string = sec < 10 ? `0${sec}` : sec;
  const timerMinutes: number | string = min < 10 ? `0${min}` : min;

  return (
    <>
      <Container>
        <Circle>
          <Wrap>
            <Display>
              {timerMinutes}:{timerSeconds}
            </Display>
            <Button onClick={() => setTimeState(!timeState)}>
              {timeState ? "Pause" : "Start"}
            </Button>
          </Wrap>
        </Circle>
        <Breaks
          DefaultClick={() => {
            let input = parseInt(
              (document.getElementById("pomodoro") as HTMLInputElement).value
            );
            setMin(input || 25);
            setSec(0);
          }}
          isDefault={isDefault}
          ShortClick={() => {
            let input = parseInt(
              (document.getElementById("shortBreak") as HTMLInputElement).value
            );
            setMin(input || 5);
            setSec(0);
          }}
          isShort={isShort}
          LongClick={() => {
            let input = parseInt(
              (document.getElementById("longBreak") as HTMLInputElement).value
            );
            setMin(input || 10);
            setSec(0);
          }}
          isLong={isLong}
        />
        <Tasks />
      </Container>
    </>
  );
};
