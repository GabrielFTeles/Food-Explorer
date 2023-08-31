import styled from 'styled-components';

export const Container = styled.footer`
  text-align: center;

  padding-block: 2.4rem;
  position: relative;
  z-index: 1000;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding-inline: 2.8rem;

    width: min(100%, 76.8rem);
    margin: 0 auto;

    > div:nth-last-of-type(1) {
      filter: grayscale(1);
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    > p {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .footer-content {
      padding-inline: 2.4rem;
      width: min(100%, 112rem);

      > p {
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    .footer-content {
      width: 100%;
      padding-inline: 12rem;
    }
  }
`;