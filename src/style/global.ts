import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle<{
  theme: {
    colors: {
      background: string;
    }
  }
}>`
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
