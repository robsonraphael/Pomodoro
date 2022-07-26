import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5em;

  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;
export const Settings = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  padding: 5px;
  cursor: pointer;
  font-size: 2em;
  transition: ease-in-out 0.25s;

  &:hover {
    font-size: 2.1em;
  }
  @media (max-width: 768px) {
    font-size: 1.8em;
    &:hover {
      font-size: 1.8em;
    }
  }
`;
export const Menu = styled.div<{ display: boolean }>`
  width: 40vw;
  height: 75vh;

  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colors.focus};
  box-shadow: 1px 1px 2px 1.5px rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  position: absolute;
  left: 30vw;
  top: 40%;
  right: auto;
  animation: opacity;

  @keyframes opacity {
    from {
      transition: ease-in-out 2s;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px){
    width: 70vw;
    left: 15vw;
    top: 50%;
  }
`;
export const Title = styled.h2<{ size: string }>`
  font-size: ${(props) => props.size};
  font-family: "Roboto";
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;
export const Label = styled.label`
  font-size: 1.1em;
  font-family: "Roboto";
  color: ${(props) => props.theme.colors.text};
`;
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5px;

  width: 90%;
  height: 80%;
`;
export const Pomodoro = styled.input.attrs({
  type: "number",
  max: "60",
  id: "pomodoro",
})`
  width: 120px;
  height: 40px;

  outline: none;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.1em;

`;
export const ShortBreak = styled(Pomodoro).attrs({
  id: "shortBreak",
})``;
export const LongBreak = styled(Pomodoro).attrs({
  id: "longBreak",
})``;
