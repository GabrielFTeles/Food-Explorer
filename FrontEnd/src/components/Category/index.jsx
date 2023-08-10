import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Card } from '../Card';

import foodImg from '../../assets/Mask group-2.png';

export function Category({ title }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        slidesPerView={1.7}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card 
            title="Prugna Pie"
            price={10.97}
            image={foodImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            title="Prugna Pie"
            price={10.97}
            image={foodImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            title="Prugna Pie"
            price={10.97}
            image={foodImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            title="Prugna Pie"
            price={10.97}
            image={foodImg}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}