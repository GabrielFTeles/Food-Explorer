import { Container } from './styles';

import { UploadSimple } from '@phosphor-icons/react'

export function FileInput({ id, label, placeholder }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <label htmlFor={id}>
        <UploadSimple size={24} />
        {placeholder}
        <input type="file" id={id} />
      </label>
    </Container>
  )
}