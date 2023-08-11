import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;

  p, h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 140%;
  }

  > main {
    
    flex: 1;
    
    width: min(100%, 31.6rem);
    padding-block: 1.6rem 3.2rem;
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
      }

      .ingredients {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2.4rem;
      }
    }
  }
`;