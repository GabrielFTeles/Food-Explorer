import { useFavorites } from '../../hooks/favorites';

import { Container, FavoritesList } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductItem } from '../../components/ProductItem';

export function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  async function handleRemoveFavorite(id) {
    await removeFavorite(id);
  }

  return (
    <Container>
      <Header />
      
      <main>
        <h1>Meus favoritos</h1>

        <FavoritesList>
          {
            favorites.map((favorite) => (
              <ProductItem 
                key={favorite.id}
                title={favorite.name}
                image={favorite.image}
                buttonText="Remover dos Favoritos"
                onClick={() => handleRemoveFavorite(favorite.id)}
              />
            ))
          }
        </FavoritesList>
      </main>

      <Footer />
    </Container>
  )
}