import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    flex: 1;

    margin: 1rem auto 5.3rem;
    padding-inline: 2.8rem;

    width: min(100%, 76.8rem);
  }

  @media screen and (min-width: 1024px) {
    > main {
      margin-top: 4rem;
      width: min(100%, 112rem);
    }
  }

  @media screen and (min-width: 1368px) {
    main {
      width: 100%;
      padding-inline: 12rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .first-row,
  > .second-row {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

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
      padding: 1.2rem 2.4rem;
    }
  }

  .new-ingredients {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
      font-family: 'Roboto';
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

  @media screen and (min-width: 1024px) {
    > .first-row {
      display: flex;
      align-items: center;
      gap: 3.2rem;

      > div:nth-of-type(1) {
        flex: 0.6;
      }

      > div:nth-of-type(2),
      > div:nth-of-type(3) {
        flex: 1;
      }
    }

    > .second-row {
      display: flex;
      gap: 3.2rem;

      > div:nth-of-type(1) {
        flex: 1;
      }

      > div:nth-of-type(2) {
        flex: 0.3;
      }
    }

    .buttons-wrapper {
      width: fit-content;
      align-self: flex-end;

      button {
        width: fit-content;
      }
    }
  }
`;