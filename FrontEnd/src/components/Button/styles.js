import styled from 'styled-components';

export const Container = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 5px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    opacity: 0.8;
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: default;
  }
`;