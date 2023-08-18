import styled from 'styled-components';

export const Container = styled.div`
  padding-inline: 1.4rem;

  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
  }
`;