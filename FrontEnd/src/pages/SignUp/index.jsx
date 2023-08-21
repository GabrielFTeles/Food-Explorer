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

  async function handleSignUp(event) {
    event.preventDefault();
    
    if (!name || !email || !password) {
      toast.error('Por favor preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    toast.promise(
      signUp({ name, email, password }),
      {
        pending: 'Criando a conta, aguarde...',
        success: {
          render() {
            setIsLoading(false);
            navigate('/');
            return `Conta criada com sucesso!`;
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

      <Form onSubmit={handleSignUp}>
        <h1>Crie sua conta</h1>

        <Input 
          id="name"
          type="text"
          label="Seu nome"
          placeholder="Exemplo: Gabriel Teles"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          id="email"
          type="text"
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
          title={ isLoading ? <ThreeDots ariaLabel="three-dots-loading" color="#FFF" height="21" width="50" /> : 'Criar conta'}
          disabled={isLoading}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}