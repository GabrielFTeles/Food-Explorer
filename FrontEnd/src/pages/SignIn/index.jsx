import { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Form } from './styles';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(event) {
    event.preventDefault()

    if (!email || !password) {
      alert('Please provide e-mail and password.');
      return;
    }

    try {
      await signIn({ email, password });
    } catch(error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <Logo 
        size={3.7}
      />

      <Form>
        <Input 
          id="email"
          type="email"
          label="E-mail"
          placeholder="exemplo@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input 
          id="password"
          type="password"
          label="Senha"
          placeholder="Sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <span>Criar uma conta</span>
      </Form>
    </Container>
  );
}