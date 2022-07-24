import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(251, 178, 74);
`;
