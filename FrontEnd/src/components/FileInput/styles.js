import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  > label:nth-of-type(1) {
    font-family: Roboto;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 100%;
  }

  > label:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    cursor: pointer;

    padding: 1.2rem 2rem;
    
    width: 100%;
    
    border-radius: 8px;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    span {
      width: fit-content;
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  input {
    display: none;
  }
`;