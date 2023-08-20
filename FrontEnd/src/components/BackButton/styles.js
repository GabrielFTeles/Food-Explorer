import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: transparent;
  font-size: 2rem;
  font-weight: 500;
  line-height: 140%;

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;

    > svg {
      width: 2.6rem;
      height: 2.6rem;
    }
  }
`;