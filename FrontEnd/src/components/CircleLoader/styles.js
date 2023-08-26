import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.2px);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0; top: 0;
  z-index: 100;

  .loader {
    border: 4px solid ${({ theme }) => theme.COLORS.TOMATO_200};
    border-left-color: transparent;
    border-radius: 50%;
  }

  .loader {
    border: 4px solid ${({ theme }) => theme.COLORS.TOMATO_200};
    border-left-color: transparent;
    width: 36px;
    height: 36px;
  }

  .loader {
    border: 4px solid ${({ theme }) => theme.COLORS.TOMATO_200};
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`