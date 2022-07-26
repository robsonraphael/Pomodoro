import { useState } from "react";
import {
  Container,
  Settings,
  Menu,
  Title,
  Time,
  Wrap,
  Label,
  Pomodoro,
  ShortBreak,
  LongBreak,
} from "./styled";
import { FcSettings } from "react-icons/fc";

export const Header = () => {
  const [active, setActive] = useState(false);

  const openOption = () => {
    const sett = document.getElementById("settings") as HTMLElement;
    sett.style.transition = "ease-in-out 0.35s";
    if (!active) {
      sett.style.transform = "rotate(45deg)";
      setActive(!active);
    } else {
      sett.style.transform = "rotate(-45deg)";
      setActive(!active);
    }
  };
  return (
    <Container>
      <Settings id="settings" onClick={() => openOption()}>
        <FcSettings />
      </Settings>
      <Menu display={active}>
        <Title size="1.2em">Timer Settings</Title>
        <Time>
          <Title size="1em">Time (minutes)</Title>
          <Wrap>
            <Label>Pomodoro</Label>
            <Pomodoro/>
          </Wrap>
          <Wrap>
            <Label>Short Break</Label>
            <ShortBreak/>
          </Wrap>
          <Wrap>
            <Label>Long Break</Label>
            <LongBreak/>
          </Wrap>
        </Time>
      </Menu>
    </Container>
  );
};
