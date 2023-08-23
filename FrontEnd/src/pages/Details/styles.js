import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;

  p, h1 {
    line-height: 140%;
  }

  > main {
    padding-block: 3.6rem 5.4rem;

    .dish,
    .dish-description {
      text-align: center;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
    }

    .dish {
      margin-top: 1.6rem;

      h1 {
        font-size: 2.7rem;
        font-weight: 500;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      img {
        width: 26.4rem;
        height: 26.4rem;
        border-radius: 50%;
        object-fit: cover;
      }

      .ingredients {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2.4rem;
      }

      .edit-button {
        margin-top: 2.8rem;
      }
    }
    
    .buttons-wrapper {
      margin-top: 4.8rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      width: 100%;

      > .counter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.6rem;

        span {
          font-family: Roboto;
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 160%;
        }

        button {
          background: transparent;
        }
      }
      
      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        width: fit-content;
        
        padding: 1.2rem 2.4rem;

        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1rem;

        border-radius: 3px;

        background: ${({ theme }) => theme.COLORS.TOMATO_100};

        transition: 0.3s;

        &:hover {
          background: ${({ theme }) => theme.COLORS.TOMATO_200};
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    > main {
      width: min(100%, 112rem);

      .dish {
        flex-direction: row;

        > img {
          width: 40rem;
          height: 40rem;
        }

        .dish-description {
          align-items: flex-start;
          text-align: start;

          > p {
            text-align: justify;
            padding-right: 1rem;
            max-height: 27rem;
            overflow-y: auto;
          }
        }

        .edit-button {
          width: fit-content;
        }

        .ingredients {
          justify-content: flex-start;
          gap: 1.2rem;
        }

        .buttons-wrapper {
          justify-content: flex-start;
        }
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