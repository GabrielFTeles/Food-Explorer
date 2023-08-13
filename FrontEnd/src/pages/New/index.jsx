import { Container } from './styles';

import { BackButton } from '../../components/BackButton';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <BackButton />

        <h1>Novo prato</h1>
      </main>

      <Footer />
    </Container>
  );
}