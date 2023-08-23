import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  position: relative;

  > .items {
    display: grid;
    place-items: center;

    position: absolute;
    top: -0.6rem; right: -0.6rem;

    font-size: 1.2rem;
    font-weight: 500;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    height: 2.2rem;
    width: 2.2rem;

    border-radius: 50%;
  }
`;