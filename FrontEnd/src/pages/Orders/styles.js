import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    display: flex;
    flex-direction: column;
    padding-block: 3.6rem;

    h1,
    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;

      margin-bottom: 2rem;
    }

    .order {
      display: flex;
      flex-direction: column;
      width: 100%;

      ul {
        display: flex;
        flex-direction: column;
      }

      > span {
        margin-top: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 2rem;
        font-weight: 500;
        line-height: 160%;
      }

      .proceed-btn {
        max-width: 50%;
        align-self: flex-end;
        margin-top: 4.7rem;
      }
    }

    .back-btn {
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
      background: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      margin-bottom: 1.7rem;
    }

    .payment {
      width: 100%;
    }

    .payment-container {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: 8px 8px 5px 5px;
      overflow: hidden;

      .payment-methods {
        display: flex;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-family: Roboto;
          height: 8rem;
          background: transparent;
          width: 100%;

          &.active {
            background: ${({ theme }) => theme.COLORS.DARK_800};
          }

          & + button {
            border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
          }
        }
      }

      .payment-info {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        padding: 3.2rem 2.6rem;

        .credit-card {
          display: flex;
          flex-direction: column;
          gap: 3.7rem;

          div {
            display: flex;
            gap: 1.7rem;
          }

          .input-wrap {
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
            background: transparent;
          }
        }
      }
    }

    @media screen and (min-width: 1024px) {
      width: min(100%, 112rem);
      flex-direction: row;
      gap: 7rem;

      .order ul {
        max-height: 41.6rem;
        overflow-y: auto;
      }
    }

    @media screen and (min-width: 1368px) {
      width: 100%;
      padding-inline: 12rem;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  
  margin-top: 3rem;

  text-align: center;
  
  & img {
    width: 30rem;
  }

  .text h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 140%;
  }

  & p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    width: min(100%, 40rem);
    margin-inline: auto;

    & strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  & button {
    width: fit-content;
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    & img {
      width: 40rem;
    }

    .text h2 {
      font-size: 3.8rem;
      font-weight: 700;
    }

    & p {
      width: 50rem;
      font-size: 1.8rem;

      & strong {
        font-size: 1.8rem;
      }
    }

    & button {
      font-size: 1.4rem;
    }
  }
`;