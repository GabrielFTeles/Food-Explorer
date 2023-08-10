import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > .items {
    display: grid;
    place-items: center;

    position: absolute;
    top: -0.5rem; right: -0.5rem;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    height: 2rem;
    width: 2rem;

    border-radius: 50%;
  }
`;