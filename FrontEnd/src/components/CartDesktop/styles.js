import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  min-width: 19rem;
  white-space: nowrap;

  padding: 1.2rem 3.2rem;

  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  transition: 0.3s;

  > svg {
    min-width: 2.8rem;
  }

  > span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;