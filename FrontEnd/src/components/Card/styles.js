import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  padding: 2.4rem;
  width: 21rem;
  height: 29.2rem;

  text-align: center;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_200};

  > svg {
    position: absolute;
    top: 1.6rem; right: 1.6rem;
  }

  > .dish-name {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    > span {
      font-size: 1.4rem;
      word-break: break-word;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  > .price {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    line-height: 2.4rem;
  }

  > img {
    max-width: 8.8rem;
    min-width: 8.8rem;
    max-height: 8.8rem;
    min-height: 8.8rem;

    border-radius: 50%;
    object-fit: cover;
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    width: 100%;
    height: 100%;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 8rem;
  
      span {
        font-family: Roboto;
      }
  
      button {
        background: transparent;
        display: grid;
        place-items: center;
      }
    }

    > button {
      display: grid;
      place-items: center;
      
      font-size: 1.4rem;
      font-weight: 500;

      height: 3.2rem;
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 5px;
      width: 100%;

      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO_200};
      }
    }
  }

  > .dish-description {
    font-family: Roboto;
    font-size: 1.4rem;
    line-height: 160%;
    width: 25rem;
    height: 4.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media screen and (min-width: 1024px) {
    width: 30.6rem;
    height: 46.2rem;
    
    gap: 1.5rem;

    > img {
      max-width: 18rem;
      min-width: 18rem;
      max-height: 18rem;
      min-height: 18rem;
    }

    > .dish-name {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;

      > span {
        font-size: 2.4rem;
      }
    }

    .price {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .buttons-wrapper {
      height: fit-content;
      flex-direction: row;
      justify-content: center;
      gap: 1.6rem;

      > div {
        width: 9rem;

        span {
          font-weight: 700;
          font-size: 2rem;
        }
      }

      > button {
        height: auto;
        padding: 1.2rem 2.4rem;
        width: fit-content;
      }
    }
  }  
`;