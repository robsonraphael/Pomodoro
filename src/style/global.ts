import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  theme: {
    colors: {
      background: string;
    }
  }
}

export const Global = createGlobalStyle<GlobalProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
      background: ${props => props.theme.colors.background};
      width: 100%;
      height: 100vh;
    }
`;
