import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


import { Card } from '../Card';

export function Category({ title, dishes }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
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
                description={dish.description}
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