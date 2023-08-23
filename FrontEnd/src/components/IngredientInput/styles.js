import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: fit-content;

  padding: 0.8rem 1.6rem;

  border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 8px;

  transition: 0.2s;

  background: ${({ theme, $isnew }) => ($isnew === "true") ? "transparent" : theme.COLORS.LIGHT_600};

  &:has(input:focus) {
    border: ${({ theme, $isnew }) => ($isnew === "true") ? `2px dashed ${theme.COLORS.WHITE}` : "2px solid transparent"};

    & > button {
      svg {
        fill: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  input, button {
    outline: none;
    background: transparent;
  }

  > button {
    display: grid;
    place-items: center;

    svg {
      fill: ${({ theme, $isnew }) => ($isnew === "true") ? theme.COLORS.LIGHT_500 : theme.COLORS.WHITE};
    }
  }

  > input {
    font-family: Roboto;
    min-width: 6.7rem;
    max-width: 23rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;