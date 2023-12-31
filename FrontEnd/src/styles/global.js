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

  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.CAKE_200} rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    border-radius: 8px;
  }

  *[role="button"] {
    cursor: pointer;
  }

  .sr-only {
    position: absolute ;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }

  main {
    flex: 1;

    margin: 1rem auto 5.3rem;
    padding-inline: 2.8rem;

    width: min(100%, 76.8rem);
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