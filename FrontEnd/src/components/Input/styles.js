import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.8rem;
  padding-inline: 1.4rem;
  height: 4.8rem;
  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .input-wrap {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    height: 100%;

    > svg {
      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    > input {
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;
      width: 100%;
      height: 100%;
  
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  }
`;