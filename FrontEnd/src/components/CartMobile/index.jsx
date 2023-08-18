import { Container } from "./styles";

import { Receipt } from '@phosphor-icons/react';

export function CartMobile({ size, items, ...rest }) {
  return (
    <Container {...rest}>
      <Receipt 
        size={size} 
      />

      <span className="items">
        {items}
      </span>
    </Container>
  )
}