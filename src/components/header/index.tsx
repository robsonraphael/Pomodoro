import { useState } from "react";

/* Components */
import { Tasks } from "../tasks";

/* Styled Components */
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

/* Icons */
import { FcSettings } from "react-icons/fc";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSettings = () => {
    const sett = document.getElementById("settings") as HTMLElement;
    sett.style.transition = "ease-in-out 0.35s";
    if (!isOpen) {
      sett.style.transform = "rotate(45deg)";
      setIsOpen(!isOpen);
    } else {
      sett.style.transform = "rotate(-45deg)";
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <Container>
        <Settings id="settings" onClick={() => openSettings()}>
          <FcSettings />
        </Settings>
        <Menu active={isOpen}>
          <Title size="1.3em">Timer Settings</Title>
          <Title size="1em">Time (minutes)</Title>
          <Time>
            <Wrap>
              <Label>Pomodoro</Label>
              <Pomodoro />
            </Wrap>
            <Wrap>
              <Label>Short Break</Label>
              <ShortBreak />
            </Wrap>
            <Wrap>
              <Label>Long Break</Label>
              <LongBreak />
            </Wrap>
          </Time>
        </Menu>
      </Container>
    </>
  );
};
