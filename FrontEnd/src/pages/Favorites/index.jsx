import { Container, FavoritesList } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Favorites() {
  return (
    <Container>
      <Header />
      
      <main>
        <h1>Meus favoritos</h1>

        <FavoritesList>

        </FavoritesList>
      </main>

      <Footer />
    </Container>
  )
}