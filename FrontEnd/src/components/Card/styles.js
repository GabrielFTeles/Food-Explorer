import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  padding: 2.4rem;
  width: 21rem;
  height: 29.2rem;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_200};

  > svg {
    position: absolute;
    top: 1.6rem; right: 1.6rem;
  }

  .heart-container {
    --heart-color: rgb(255, 91, 137);
    position: absolute;
    top: 1.6rem; right: 1.6rem;

    width: 2.2rem;
    height: 2.2rem;
    transition: .3s;
  }

  .heart-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .heart-container .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heart-container .svg-outline,
  .heart-container .svg-filled {
    fill: #FFF;
    position: absolute;
  }

  .heart-container .svg-filled {
    animation: keyframes-svg-filled 1s;
    display: none;
  }

  .heart-container .svg-celebrate {
    position: absolute;
    animation: keyframes-svg-celebrate .5s;
    animation-fill-mode: forwards;
    display: none;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }

  .heart-container .checkbox:checked~.svg-container .svg-filled {
    fill: var(--heart-color);
    stroke: var(--heart-color);
    display: block
  }

  .heart-container .checkbox:checked~.svg-container .svg-celebrate {
    display: block
  }

  @keyframes keyframes-svg-filled {
    0% {
      transform: scale(0);
    }

    25% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1);
      filter: brightness(1.5);
    }
  }

  @keyframes keyframes-svg-celebrate {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
      filter: brightness(1.5);
    }

    100% {
      transform: scale(0.65);
      opacity: 0;
      display: none;
    }
  }

  > .dish-name {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  > .price {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    line-height: 2.4rem;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    font-family: Roboto;

    button {
      background: transparent;
    }
  }

  > button {
    font-size: 1.4rem;
    font-weight: 500;

    height: 3.2rem;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    width: 100%;
  }
`;