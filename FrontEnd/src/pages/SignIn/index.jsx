import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ThreeDots } from  'react-loader-spinner'
import { toast } from 'react-toastify';

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSignIn(event) {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please provide e-mail and password.');
      return;
    }

    setIsLoading(true);

    toast.promise(
      signIn({ email, password }),
      {
        pending: 'Signing in...',
        success: {
          render({ data }) {
            setIsLoading(false);
            return `Welcome, ${data.name}!`;
          },
          icon: "👋",
        },
        error: {
          render({ data }) {
            setIsLoading(false);
            return `${data.message}`;
          }
        }
      }
    );

  }

  return (
    <Container>
      <Logo 
        size={3.7}
      />

      <Form onSubmit={handleSignIn}>
        <h1>Faça login</h1>

        <Input 
          id="email"
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
          title={ isLoading ? <ThreeDots ariaLabel="three-dots-loading" color="#FFF" height="16" width="50" /> : 'Entrar'}
          onClick={handleSignIn}
          disabled={isLoading}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}