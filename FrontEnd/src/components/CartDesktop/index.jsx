import { Container } from "./styles";

import { Receipt } from '@phosphor-icons/react';

export function CartDesktop({ size, items, ...rest }) {
  return (
    <Container to="/orders" {...rest}>
      <Receipt 
        size={size} 
      />

      <span className="items">
        Pedidos ({items})
      </span>
    </Container>
  )
}