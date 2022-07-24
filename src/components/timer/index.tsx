import React, { useState, useEffect } from "react";

/* Styled Components */
import { Container, Wrap, Counter, Button } from "./styled";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(24)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    /* Counter */
    let interval = setInterval(() => {
      clearInterval(interval);

      if(seconds === 0){
        if(min !== 0) {
          setSeconds(59)
          setMin(min - 1);

          // Break
        } else {
          let min = isActive ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds)
          setMin(min)
          setIsActive(!isActive)
        }
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000)
  }, [seconds])

  let timerSeconds = seconds < 10 ? `0${seconds}` : seconds
  return (
    <>
      <Container>
        <Wrap>
          <Counter>
            {min}:{timerSeconds}
          </Counter>
          <Button>Start</Button>
        </Wrap>
      </Container>
    </>
  );
};
