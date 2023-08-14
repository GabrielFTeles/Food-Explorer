import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: fit-content;

  padding: 1rem 1.6rem;

  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 8px;

  background: ${({ theme, $isnew }) => ($isnew === "true") ? "transparent" : theme.COLORS.LIGHT_600};

  &:has(input:focus) {
    border: ${({ theme, $isnew }) => ($isnew === "true") ? `1px dashed ${theme.COLORS.WHITE}` : "1px solid transparent"};

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
    width: 6.7rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;