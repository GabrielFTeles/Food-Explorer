import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    min-width: min(100%, 112rem);
    flex: 1;

    > h1 {
      font-size: 3.2rem;
      line-height: 140%;
    }
  }
`;

export const FavoritesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4.8rem;
`;