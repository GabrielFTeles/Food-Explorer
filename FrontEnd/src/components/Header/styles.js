import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 0 2.4rem;

  min-height: 11.7rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: min(100%, 76.8rem);

    padding-inline: 2.8rem;

    margin-inline: auto;

    .desktop-search {
      display: none;
    }

    .favorites-btn {
      display: none;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      flex: 1;

      > span {
        font-family: Roboto;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 1.2rem;
      }
    }

    .new-dish {
      display: none;

      > button {
        min-width: 21.6rem;
        font-size: 14px;
        font-weight: 500;
      }
    }

    .sign-out {
      display: none;
    }

    &.menuOpen {
      visibility: hidden;
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: auto;
    padding-block: 2.4rem;

    > .header-content {
      width: min(100%, 112rem);

      gap: 3.2rem;

      > svg {
        display: none;
      }

      .logo {
        min-width: 17rem;
        flex-direction: column;
        gap: 0;
        flex: 0;

        > span {
          align-self: flex-end;
        }
      }

      .desktop-search {
        display: block;
      }

      .favorites-btn {
        white-space: nowrap;
        display: block;
      }

      .new-dish {
        display: block;
      }

      .sign-out {
        display: block;
        height: fit-content;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    > .header-content {
      width: 100%;
      padding-inline: 12rem;
    }
  }
`;

export const MenuMobile = styled.div`
  visibility: hidden;

  display: flex;
  gap: 1rem;

  position: absolute;
  left: 50%; top: 0;
  z-index: 10;

  transform: translateX(-50%);

  height: 100dvh;
  width: min(100%, 76.8rem);

  padding: 6.2rem 2.8rem 2.4rem;

  font-family: Roboto;
  font-size: 2.1rem;

  > span {
    font-size: 2rem;
    height: fit-content;
  }

  > nav {
    position: absolute;
    left: 0; top: 11.7rem;
    z-index: 10;

    padding-inline: 2.8rem;

    transition: 0.4s;

    height: 100%;
    max-height: 0;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_400};

    > div:nth-of-type(1) {
      margin-top: 3.6rem;
    }

    > ul {
      margin-top: 3.6rem;

      li {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        
        padding: 1rem;

        a {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-family: Poppins;
          font-size: 2.2rem;
          line-height: 140%;
        }
      }
    }
  }

  &[aria-expanded="true"] {
    visibility: visible;

    > nav {
      max-height: calc(100% - 11.7rem);
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
  
`;