import { Container } from "./styles";

import { Logo } from "../Logo";

export function Footer() {
  return (
    <Container>
      <Logo 
        size={1.5}
      />

      <p>&copy; 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}