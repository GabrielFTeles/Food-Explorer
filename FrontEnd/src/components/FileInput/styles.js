import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label:nth-of-type(1) {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 100%;
  }

  > label:nth-of-type(2) {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    width: 100%;

    padding: 1.2rem 3.2rem;

    border-radius: 8px;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  input {
    display: none;
  }
`;