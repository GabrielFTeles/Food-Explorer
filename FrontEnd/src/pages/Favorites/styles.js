import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    padding-block: 3.6rem;
    flex: 1;

    > h1 {
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
    }
  }

  @media screen and (min-width: 1024px) {
    > main {
      width: min(100%, 112rem);
    }
  }

  @media screen and (min-width: 1368px) {
    > main {
      width: 100%;
      padding-inline: 12rem;
    }
  }
`;

export const FavoritesList = styled.ul`
  margin-top: 2.7rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 4.8rem;
  }
`;

export const EmptyFavorites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  margin-top: 3.6rem;

  text-align: center;

  & img {
    width: min(100%, 40rem);
  }

  & h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    font-weight: 500;

    & span {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;