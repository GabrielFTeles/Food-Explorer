import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Card } from '../Card';

export function Category({ title, dishes }) {
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
        {
          dishes &&
          dishes.map(dish => (
            <SwiperSlide
              key={dish.id}
            >
              <Card
                id={dish.id}
                title={dish.name}
                price={dish.price}
                image={dish.image}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}