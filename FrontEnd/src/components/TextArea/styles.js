import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    font-family: Roboto;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > textarea {
    border: 1px solid transparent;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    font-family: 'Roboto';
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    resize: none;
    outline: none;

    padding: 1.4rem;
    
    width: 100%;
    height: 17.2rem;

    transition: 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus,
    &:valid {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
      background: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }
`;