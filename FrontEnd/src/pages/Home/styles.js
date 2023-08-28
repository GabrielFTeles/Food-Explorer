import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;

  main {
    padding-inline: 2.4rem 1.6rem;

    > .introduction-container {
      width: min(100%, 42.8rem);

      margin: 3.2rem auto 6.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      position: relative;

      > figure {
        position: relative;
        min-width: 18rem;
        height: 15rem;

        & img {
          position: absolute;
          top: -3rem; left: -2.5rem;
          width: 22.1rem;
          height: 18rem;
          object-fit: cover;
          object-position: 0 2.5rem;
          transform: scaleX(-1);
          filter: brightness(0.8);
        }
      }

      div {
        width: min(100%, 25rem);
        font-family: Poppins;
        margin-top: 2rem;
        
        h1 {
          font-size: clamp(0.75rem, 0.5954rem + 2vw, 2rem);
          font-weight: 600;
        }

        p {
          margin-top: 0.4rem;
          font-size: clamp(0.75rem, 0.5954rem + 0.8vw, 1rem);
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
        height: 22rem;
        padding-right: 1.5rem;
        margin-top: 0;

        > figure {
          min-width: 24rem;

          & img {
            top: -3.5rem; left: -2.5rem;
            width: 28.1rem;
            height: 22rem;
            object-position: 0 2.5rem;
          }
        }

        > .text-wrapper {
          margin-top: 3rem;
          flex: 1;

          display: flex;
          justify-content: center;

          .text-content {
            width: 32rem;
          }

          h1 {
            font-size: 2.4rem;
          }

          p {
            font-size: 1.4rem;
          }
        }

        &::before {
          width: 100%;
          height: 80%;
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
      padding: 2.8rem;

      > .introduction-container {
        width: 100%;
        height: 40rem;
        justify-content: initial;
        margin-top: 4.5rem;

        > figure {
          min-width: 45rem;

          & img {
            top: -20.6rem; left: -10.5rem;
            width: 65.1rem;
            height: 48rem;
            object-position: 0 2.5rem;
          }
        }

        .text-wrapper {
          justify-content: center;
        }

        > .text-wrapper {
          .text-content  {
            width: fit-content;
          }

          h1 {
            font-size: clamp(3rem, 0.5954rem + 3vw, 8rem);
          }

          p {
            font-size: clamp(1rem, 0.5954rem + 0.8vw, 3rem);
          }
        }

        &::before {
          width: 100%;
          height: 80%;
          border-radius: 8px;
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