import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin: 1rem auto 5.3rem;

    width: min(100%, 36.4rem);

    .input-wrap {
      background: ${({ theme }) => theme.COLORS.DARK_800};

      &:has(input:focus),
      &:has(input:valid) {
        background: ${({ theme }) => theme.COLORS.DARK_900};
      }
    }

    .buttons-wrapper {
      display: flex;
      align-items: center;
      gap: 3.2rem;

      button {
        padding: 1.2rem;
      }
      
      button:nth-of-type(1) {
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    .new-ingredients {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      font-family: 'Roboto';

      > label {
        width: fit-content;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.6rem;

        padding: 0.8rem 1rem;
        border-radius: 0.8rem;
        background: ${({ theme }) => theme.COLORS.DARK_800};

        transition: 0.2s;

        &:has(input:focus) {
          background: ${({ theme }) => theme.COLORS.DARK_900};
        }
      }
    }

    > h1 {
      font-size: 3.2rem;
      font-weight: 500;
    }
  }
`;