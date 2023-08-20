import { Container } from './styles';

import { UploadSimple } from '@phosphor-icons/react'

export function FileInput({ id, label, placeholder, mouseOverText, onChange }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <label htmlFor={id} title={mouseOverText}>
        <UploadSimple size={24} />
        <span>{placeholder}</span>
        <input onChange={onChange} type="file" id={id} />
      </label>
    </Container>
  )
}