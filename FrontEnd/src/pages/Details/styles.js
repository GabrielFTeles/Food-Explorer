import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;

  p, h1 {
    line-height: 140%;
  }

  > main {
    
    flex: 1;
    
    width: min(100%, 31.6rem);
    padding-block: 3.6rem 5.4rem;
    margin-inline: auto;

    .dish-info,
    .dish-description {
      text-align: center;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
    }

    .dish-info {
      margin-top: 1.6rem;

      h1 {
        font-size: 2.7rem;
        font-weight: 500;
      }

      img {
        width: 26.4rem;
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
      display: flex;
      align-items: center;
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
        flex: 1;

        height: 3.8rem;

        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1rem;

        border-radius: 3px;

        background: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }
  }
`;