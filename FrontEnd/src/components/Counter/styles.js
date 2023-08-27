import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 8rem;

  & button {
    display: grid;
    place-items: center;
    background: transparent;
    border: none;
  }

  & span {
    font-family: Roboto;
  }

  @media screen and (min-width: 1024px) {
    width: 9rem;

    & span {
      font-weight: 700;
      font-size: 2rem;
    }
  } 
`;