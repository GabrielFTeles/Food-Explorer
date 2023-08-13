import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > main {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin: 1rem auto 5.3rem;

    width: min(100%, 36.4rem);

    .input-wrap {
      background: ${({ theme }) => theme.COLORS.DARK_800};
    }

    > h1 {
      font-weight: 500;
    }
  }
`;