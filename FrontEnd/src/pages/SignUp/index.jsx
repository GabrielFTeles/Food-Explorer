import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { ThreeDots } from  'react-loader-spinner';

import { Container, Form } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUp() {
    setIsLoading(true);

    toast.promise(
      signUp({ name, email, password }),
      {
        pending: 'Signing up...',
        success: {
          render() {
            setIsLoading(false);
            navigate('/');
            return `Account created!`;
          }
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

      <Form>
        <Input 
          id="name"
          type="text"
          label="Seu nome"
          placeholder="Exemplo: Gabriel Teles de Faria"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          id="email"
          type="email"
          label="E-mail"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          id="password"
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title={ isLoading ? <ThreeDots ariaLabel="three-dots-loading" color="#FFF" height="16" width="50" /> : 'Criar conta'}
          type="button"
          onClick={handleSignUp}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}