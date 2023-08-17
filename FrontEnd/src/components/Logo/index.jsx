import { Container } from './styles';

import img from '../../assets/Polygon.svg';

export function Logo({ size, ...rest }) {
  return (
    <Container size={size} {...rest}>
      <img src={img} alt="Polygon" />
      <h1>food explorer</h1>
    </Container>
  )
}