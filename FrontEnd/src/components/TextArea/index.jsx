import { Container } from './styles';

export function TextArea({ label, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest} />
    </Container>
  )
}