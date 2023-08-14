import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    padding: 1.6rem;

    border: 1px solid transparent;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.DARK_900};

    > svg {
      transition: 0.3s;
    }
    
    span {
      font-family: Roboto;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      line-height: 160%;
    }

    > ul {
      visibility: hidden;
      max-height: 0;

      transition: 0.4s max-height, 0.4s visibility;

      position: absolute;
      left: -1px; top: 5rem;

      border: 1px solid transparent;
      border-top: none;
      background: ${({ theme }) => theme.COLORS.DARK_900};

      width: calc(100% + 2px);

      border-radius: 0 0 5px 5px;
      overflow: hidden;

      li {
        padding: 1rem 1.6rem;
      }
    }

    &.active {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};

      > svg {
        transform: rotate(-180deg);
      }

      > ul {
        border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
        border-top: none;
        visibility: visible;
        max-height: 10rem;
      }
    }
  }
`;