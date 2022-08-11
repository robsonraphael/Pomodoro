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
} from "./settings.styled";
import { FcSettings } from "react-icons/fc";

export const Header = () => {
    // Estado das configurações
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

    // Função que muda o estado das configurações  
  const openSettings = () => {
    const sett = document.getElementById("settings") as HTMLElement;
    sett.style.transition = "ease-in-out 0.35s";
    if (!settingsIsOpen) {
      sett.style.transform = "rotate(45deg)";
      setSettingsIsOpen(!settingsIsOpen);
    } else {
      sett.style.transform = "rotate(-45deg)";
      setSettingsIsOpen(!settingsIsOpen);
    }
  };

  return (
    <>
      <Container>
        <Settings id="settings" onClick={() => openSettings()}>
          <FcSettings />
        </Settings>
        <Menu active={settingsIsOpen}>
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
