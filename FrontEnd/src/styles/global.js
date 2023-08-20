import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
    font-size: 1.6rem;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    --webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background: ${({ theme }) => theme.COLORS.DARK_400};
    min-height: 100dvh;
  
    &:has(*.menuOpen) {
      overflow: hidden;
    }
  }

  body {
    scrollbar-width: auto;
    scrollbar-color: #82f3ff rgba(0, 0, 0, 0);
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  body::-webkit-scrollbar-thumb {
    background-color: #82f3ff;
    border-radius: 8px;
  }

  *[role="button"] {
    cursor: pointer;
  }
  
  button {
    font-family: 'Poppins';
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