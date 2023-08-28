import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;

  & label {
    font-family: Roboto;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  & input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    height: 4.8rem;

    border-radius: 0.8rem;
    border: 1px solid transparent;
    outline: none;

    padding-inline: 1.4rem;

    transition: 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:valid,
    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;