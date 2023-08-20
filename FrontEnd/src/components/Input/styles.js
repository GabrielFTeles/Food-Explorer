import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;

  > label {
    font-family: Roboto;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .input-wrap {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    height: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    padding-inline: 1.4rem;
    height: 4.8rem;

    transition: 0.2s;

    border: 1px solid transparent;

    > svg {
      path {
        transition: 0.2s;
        fill: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    > input {
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;
      width: 100%;
      height: 100%;

      outline: none;
  
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover, 
      &:-webkit-autofill:focus, 
      &:-webkit-autofill:active{
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({ theme }) => theme.COLORS.WHITE};
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: inset 0 0 20px 20px #23232329;
      }
    }

    &:has(input:focus),
    &:has(input:valid) {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};

      svg {
        path {
          fill: ${({ theme }) => theme.COLORS.CAKE_200};
        }
      }
    }
  }
`;