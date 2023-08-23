import { Container } from "./styles";

import { Receipt } from '@phosphor-icons/react';

export function CartMobile({ size, items, ...rest }) {
  return (
    <Container to="/orders" {...rest}>
      <Receipt 
        size={size} 
      />

      <span className="items">
        {items > 9 ? '9+' : items}
      </span>
    </Container>
  )
}