import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;

  width: 27vw;
  height: fit-content;  
  
  position: absolute;
  top: 12%;
  left: 2%;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  border-bottom: 2px solid rgb(255, 255, 255, 0.6);
`;
export const Title = styled.h3`
  padding: 10px;
  font-size: 1.2em;
  font-family: "Roboto";
  font-weight: bolder;
  color: ${(props) => props.theme.colors.text};
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255, 0.8);
  color: rgb(0, 0, 0, 0.4);
  padding: 1px;
  border: none;
  border-radius: 4px;
  font-size: 1.8em;
  margin-right: 4px;
  cursor: pointer;
  transition: ease-in 0.25s;

  &:hover {
    font-size: 1.9em;
    background: rgb(255, 255, 255, 0.7);
  }
`;
export const Menu = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 45%;
  top: 45%;

  width: 200px;
  height: fit-content;

  overflow: hidden;
  padding: 5px;

  border-radius: 4px;
  background-color: whitesmoke;
`;
export const Option = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 5px;

  font-size: 1em;
  font-family: "Roboto";
  
  cursor: pointer;
  background: none;
  width: 99%;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: rgba(225, 225, 225);
  }
`;
export const Add = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 1.1em;
  width: 99%;
  height: 40px;
  background-color: rgb(0, 0, 0, 0.1);
  color: rgb(255, 255, 255, 0.5);
  font-weight: bold;
  cursor: pointer;
  border: 2px dashed rgb(255, 255, 255, 0.7);

  &:hover {
    color: rgb(255, 255, 255, 0.8);
    border-color: white;
  }

`;
export const ViewTasks = styled.div.attrs({id: 'tasks'})``;