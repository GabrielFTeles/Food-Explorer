import styled from 'styled-components';

export const Container = styled.main`
  font-family: Roboto;
  padding-top: 15.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.3rem;
  
  height: 100dvh;
`;

export const Form = styled.form`
  width: min(100%, 31.6rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }
`;