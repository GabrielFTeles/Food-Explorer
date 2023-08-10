import { Container } from './styles';

export function Button({ title, ...rest }) {
  return (
    <Container
      {...rest}
    >
      {title}
    </Container>
  )
}