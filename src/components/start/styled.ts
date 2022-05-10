import styled from "styled-components";

interface MyProps {
  background: string;
  color: string;
}


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props : MyProps) => props.background};
  border: none;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: ${(props : MyProps) => props.color};

  width: 220px;
  height: 40px;

  cursor: pointer;
  margin: 20px;
`;
