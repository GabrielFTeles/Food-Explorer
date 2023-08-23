import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  padding-block: 1.6rem;

  > img {
    height: 7.2rem;
    width: 7.2rem;
    object-fit: cover;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    button {
      width: fit-content;

      background: transparent;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      font-family: Roboto;
      font-size: 1.2rem;
      line-height: 160%;

      transition: 0.2s;

      &:hover {
        text-decoration: underline;
        filter: brightness(1.3);
      }
    }
  }

  .dish-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > h3 {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .quantity {
        white-space: nowrap;
      }
      
      .title {
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .title,
      .quantity {
        font-size: 2rem;
        font-weight: 500;
      }
    }

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: Roboto;
      font-size: 1.2rem;
    }
  }
`;