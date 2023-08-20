import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";

import { Logo } from "../Logo";

export function Footer() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <div className="footer-content">
        <Logo 
          size={isDesktop ? 2.5 : 1.5}
        />

        <p>&copy; 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}