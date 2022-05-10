import styled from "styled-components";

interface Props {
  color: string,
}

export const Container = styled.div`
  width: 400px;
  height: 80px;

  border: none;
  background: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CountingTime = styled.div`
    text-align: center;
    font-size: 4em;
    font-weight: bold;
    color: ${(props : Props) => props.color};
`;
