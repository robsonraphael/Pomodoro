import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: Center;
  justify-content: center;
  display: flex;
  gap: 1.5em;
  padding: 1em;
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
    background-color: rgb(92, 92, 92);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 45px;
    font-size: 0.95em;
  }
`;
