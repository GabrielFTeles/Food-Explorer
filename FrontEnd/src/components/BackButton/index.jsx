import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { CaretLeft } from '@phosphor-icons/react';

export function BackButton({ ...rest }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container
      {...rest}
      onClick={handleBack}
    >
      <CaretLeft 
        size={20}
      />
      voltar
    </Container>
  )
}