import styled from "styled-components";

interface WrapProps {
  margin?: string;
  padding?: string;
  height?: string;
  background?: string;
  radius?: string;
  display?: string;
  align?: string;
  justify?: string;
  gap?: string;
}

export const Container = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  background-color: rgb(255, 255, 255);
  width: 30em;
  height: fit-content;
  padding: 5px;

  border-radius: 10px;
  box-shadow: 2px 1px 2px rgb(0, 0, 0, 0.2);

  flex-direction: column;
`;

export const TitleTask = styled.input`
  font-family: "Roboto";
  background-color: none;
  border: none;
  padding: 22px 20px;
  outline: none;
  font-size: 1.25em;
  color: rgb(50, 50, 50);
  font-weight: bold;
  letter-spacing: 0.7px;

  &::placeholder {
    color: rgb(0, 0, 0, 0.2);
    font-style: italic;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 0.2px;
  }
`;

export const Wrap = styled.div<WrapProps>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justify};
  border-radius: ${(props) => props.radius};
`;

export const Title = styled.h3`
  font-size: 1em;
  font-family: "Roboto";
  font-weight: 550;
  color: rgb(60, 60, 60);
`;

export const Number = styled.input.attrs({
  type: "number",
})`
  font-size: 1.3em;
  font-family: "Roboto";
  color: rgb(0, 0, 0, 0.7);
  width: 75px;
  height: 40px;
  padding: 10px;
  border: none;
  background-color: rgba(239, 239, 239);
  border-radius: 4px;
  outline: none;
  box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.2);
`;

export const Up = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 32px;
  font-size: 1.1em;
  background: none;
  border-radius: 4px;
  border: 1.5px solid #ccc;
  color: rgb(0, 0, 0, 0.8);
  box-shadow: 0px 1.5px 1.5px 0.5px rgb(0, 0, 0, 0.2);

  &:active {
    box-shadow: none;
    font-size: 1em;
  }
`;
export const Down = styled(Up)``;

export const AddNote = styled.button`
  font-size: 0.9em;
  padding: 2px;
  background: none;
  border: none;
  font-weight: bold;
  text-decoration: underline;
  color: rgb(0, 0, 0, 0.5);
  cursor: pointer;
`;
export const Save = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 0.95em;
  color: white;
  border: none;
  background: rgb(200, 200, 200);
  transition: ease-in 0.25s;

  &:hover {
    background: rgb(180, 180, 180);
  }
  &:active {
    background-color: rgb(220, 220, 220);
  }
`;
export const Cancel = styled(Save)`
  font-weight: bold;
  color: rgb(0, 0, 0, 0.5);
  background: none;

  &:hover {
    background: rgb(219, 219, 219);
  }
`;
export const Notes = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  padding: 10px 20px;
`;

export const Note = styled.textarea.attrs({
  rows: 4.5,
  cols: 45
})`
  font-size: 1em;
  padding: 5px;
  font-family: "Roboto";
  outline: none;
  letter-spacing: 0.5px;
  border-radius: 5px;
`;
