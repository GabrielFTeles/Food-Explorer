import { 
  Container,
  Form
} from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  return (
    <Container>
      <Logo 
        size={3.7}
      />

      <Form>
        <Input 
          id="name"
          type="text"
          label="Seu nome"
          placeholder="Exemplo: Gabriel Teles de Faria"
        />

        <Input 
          id="email"
          type="email"
          label="E-mail"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input 
          id="password"
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
        />

        <Button
          title="Criar conta"
        />

        <span>Já tenho uma conta</span>
      </Form>
    </Container>
  );
}