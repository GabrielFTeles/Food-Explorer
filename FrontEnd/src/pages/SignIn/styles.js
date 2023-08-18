import styled from 'styled-components';

export const Container = styled.main`
  font-family: Roboto;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.3rem;
  
  height: 100dvh;
  width: min(100%, 152rem);
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const Form = styled.form`
  width: min(100%, 35.6rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  > h1 {
    display: none;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;

    width: min(100%, 47.6rem);
    padding: 6.4rem;

    h1 {
      display: block;
      color: var(--light-light-100, #FFF);
      font-family: Poppins;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
    }
  }
`;