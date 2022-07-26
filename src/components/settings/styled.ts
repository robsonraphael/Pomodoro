import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 10%;

  display: flex;
  gap: 1em;

  @media (max-width: 768px) {
    bottom: 12%;
  }
`;
export const Options = styled.button<{ bg: string }>`
  width: 120px;
  height: 50px;

  font-size: 1em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.text};

  border-radius: 5px;
  border: none;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(0, 0, 0, 0.2);

  cursor: pointer;
  transition: ease 0.25s;
  background-color: ${(props) =>
    props.bg === "Default"
      ? "rgb(235, 66, 45)"
      : "none" && props.bg === "Long"
      ? "rgb(255, 100, 60)"
      : "rgb(217, 34, 157)"};

  &:hover {
    background-color: rgb(25, 150, 80);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 45px;
    font-size: 0.95em;
  }
`;
