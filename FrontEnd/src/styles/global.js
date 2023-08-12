import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    font-size: 62.5%;
  }

  body {
    --webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Poppins;
    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_400};
    min-height: 100dvh;
  
    &:has(*.menuOpen) {
      overflow: hidden;
    }
  }

  *[role="button"] {
    cursor: pointer;
  }

  
  button {
    cursor: pointer;
  }

  button,
  input {
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  ul {
    list-style: none;
  }
`;