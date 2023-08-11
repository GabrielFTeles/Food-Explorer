import { Container } from './styles';

import { useNavigate } from 'react-router-dom';

import { CaretLeft } from '@phosphor-icons/react';

export function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container
      onClick={handleBack}
    >
      <CaretLeft 
        size={20}
      />
      voltar
    </Container>
  )
}