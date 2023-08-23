import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;

  main {
    > .introduction-container {
      width: min(100%, 42.8rem);

      margin: 3.2rem auto 6.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      position: relative;

      div {
        width: 25rem;
        font-family: Poppins;
        margin-top: 2rem;
        
        h1 {
          font-size: 1.8rem;
          font-weight: 600;
        }

        p {
          margin-top: 0.4rem;
          font-size: clamp(0.75rem, 0.5954rem + 0.578vw, 1rem);
        }
      }

      &::before {
        content: '';
        position: absolute;
        right: 0; bottom: 0;
        z-index: -10;

        width: 93%;
        height: 82%;

        border-radius: 3px;
        
        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
      }
    }

    .dishes-section {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      margin-bottom: 2.4rem;
    }
  }

  @media screen and (min-width: 600px) {
    main {
      > .introduction-container {
        width: min(100%, 70rem);
        height: 23rem;
        padding-right: 2rem;

        > img {
          height: 100%;
        }

        > div {
          margin-top: 4rem;
          width: 32rem;

          h1 {
            font-size: 2.4rem;
          }

          p {
            font-size: 1.4rem;
          }
        }

        &::before {
          height: 70%;
          border-radius: 8px;
        }
      }

      .dishes-section {
        gap: 3.2rem;
        margin-bottom: 3.2rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      width: min(100%, 112rem);

      > .introduction-container {
        width: 100%;
        height: 40rem;
        justify-content: initial;

        > img {
          height: 100%;
        }

        > div {
          width: fit-content;
          margin-inline: auto;

          h1 {
            font-size: 4rem;
          }

          p {
            font-size: 1.4rem;
          }
        }

        &::before {
          height: 70%;
        }
      }

      .dishes-section {
        gap: 4.6rem;
        margin-bottom: 4.6rem;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    main {
      width: 100%;
      padding-inline: 12rem;
    }
  }
  
`;