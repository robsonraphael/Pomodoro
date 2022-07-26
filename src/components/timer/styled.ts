import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 2px 2px 1px rgb(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 768px) {
    gap: 1.5em;
  }
`;
export const Counter = styled.span`
  font-size: 6em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 5em;
  }
`;
export const Button = styled.button`
  width: 140px;
  height: 60px;

  border-radius: 5px;
  border: none;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.secondary};

  font-size: 1.7em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  transition: ease 0.25s;

  &:hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
  @media (max-width: 768px) {
    width: 130px;
    height: 50px;
    font-size: 1.5em;
  }
`;