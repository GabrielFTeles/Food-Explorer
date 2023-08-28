import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    font-family: Roboto;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;