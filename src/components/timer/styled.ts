import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: rgb(235, 66, 47);
  box-shadow: 1px 2px 2px 1px rgb(0, 0, 0, 0.2);
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;
export const Counter = styled.span`
  font-size: 6em;
  font-weight: bolder;
  color: white;
`;
export const Button = styled.button`
  width: 120px;
  height: 50px;

  border-radius: 5px;
  border: none;
  background-color: rgb(54, 51, 52);
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(0, 0, 0, 0.2);

  font-size: 1.5em;
  font-weight: bolder;
  color: white;
  cursor: pointer;

  transition: ease 0.25s;

  &:hover {
    background-color: rgb(84, 81, 82);
  }
`;
