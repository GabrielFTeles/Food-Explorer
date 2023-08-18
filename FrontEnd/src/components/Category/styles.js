import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2.4rem;

  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-next {
    justify-content: flex-end;
    padding-right: 2rem;
    right: 0;
  }

  .swiper-button-prev {
    justify-content: flex-start;
    padding-left: 2rem;
    left: 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 100%;
    width: 10%;
    top: 1.8rem;
    
    &::after {
      font-size: 3.4rem;
    }
  }

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
  }

  @media screen and (min-width: 1024px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
    }

    > h2 {
      font-size: 3rem;
    }
  }
`;