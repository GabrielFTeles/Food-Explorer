import { 
  Container,
  Form
} from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Logo 
        size={3.7}
      />

      <Form>
        <Input 
          id="email"
          type="email"
          label="Email"
          placeholder="exemplo@email.com"
        />

        <Input 
          id="password"
          type="password"
          label="Senha"
          placeholder="Sua senha"
        />

        <Button
          title="Entrar"
        />

        <span>Criar uma conta</span>
      </Form>
    </Container>
  );
}