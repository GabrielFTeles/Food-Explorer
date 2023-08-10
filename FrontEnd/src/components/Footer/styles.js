import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem 2.7rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > div:nth-last-of-type(1) {
    filter: grayscale(1);
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  > p {
    font-size: 1.2rem;
  }
`;