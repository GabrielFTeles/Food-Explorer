import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    display: flex;
    flex-direction: column;
    padding-block: 5.6rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;

      margin-bottom: 2.7rem;
    }

    ul {
      display: flex;
      flex-direction: column;
    }

    > span {
      margin-top: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
    }

    > button {
      max-width: 50%;
      align-self: flex-end;
      margin-top: 4.7rem;
    }
  }
`;