import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .swiper {
    width: 100%;
    position: relative;
  }

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-next {
    justify-content: flex-end;
    padding-right: 2rem;
    right: 0;
    background: linear-gradient(90deg, rgba(0,10,15,0) 0%, rgba(0,10,15,1) 100%);
  }

  .swiper-button-prev {
    justify-content: flex-start;
    padding-left: 2rem;
    left: 0;
    background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(0,10,15,0) 100%);
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 100%;
    width: 8%;
    top: 2.2rem;
    
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
    .swiper {
      
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
    }

    .swiper-button-disabled {
      display: none;
    }

    > h2 {
      font-size: 3rem;
    }
  }
`;