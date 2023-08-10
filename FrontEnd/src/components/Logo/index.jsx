import { Container } from './styles';

import img from '../../assets/Polygon.svg';

export function Logo({ size }) {
  return (
    <Container size={size}>
      <img src={img} alt="Polygon" />
      <h1>food explorer</h1>
    </Container>
  )
}