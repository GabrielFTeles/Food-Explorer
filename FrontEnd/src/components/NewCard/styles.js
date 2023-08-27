import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: grid;
  place-items: center;

  padding: 2.4rem;

  width: 21rem;
  height: 29.2rem;

  border-radius: 8px;
  border: 5px dashed ${({ theme }) => theme.COLORS.LIGHT_400};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  cursor: pointer;
  text-decoration: none;

  opacity: 0.3;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .img {
      display: grid;
      place-items: center;
    }

    & svg {
      width: 5rem;
      height: 5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    & span {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  @media screen and (min-width: 1024px) {
    width: 30.6rem;
    height: 46.2rem;

    padding: 4rem;

    & div {
      & svg {
        width: 12rem;
        height: 12rem;
      }

      & span {
        font-size: 2rem;
      }
    }
  }
`;