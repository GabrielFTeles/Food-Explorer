import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: fit-content;

  > img {
    height: ${({ size }) => `${size}rem`};
  }

  > h1 {
    font-size: ${({ size }) => `${size}rem`};
  }
`;
