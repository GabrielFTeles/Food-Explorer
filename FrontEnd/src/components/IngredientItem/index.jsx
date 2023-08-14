import { Container } from './styles';

import { X, Plus } from '@phosphor-icons/react'

export function IngredientItem({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input
        readOnly={!isNew}
        value={value}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  )
}