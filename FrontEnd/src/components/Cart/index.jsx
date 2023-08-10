import { Container } from "./styles";

import { Receipt } from '@phosphor-icons/react';

export function Cart({ size, items }) {
  return (
    <Container>
      <Receipt 
        size={size} 
      />

      <span className="items">
        {items}
      </span>
    </Container>
  )
}