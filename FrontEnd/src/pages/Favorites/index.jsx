import { useFavorites } from "../../hooks/favorites";

import { Container, FavoritesList, EmptyFavorites } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductItem } from "../../components/ProductItem";

import EmptyFavoritesIMG from "../../assets/no-favorites.svg";

export function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  async function handleRemoveFavorite(id) {
    await removeFavorite(id);
  }

  return (
    <Container>
      <Header />

      <main>
        {favorites.length === 0 ? (
          <EmptyFavorites>
            <img src={EmptyFavoritesIMG} alt="Não há favoritos" />
            <h2>Você ainda não tem <span>favoritos</span>.</h2>
          </EmptyFavorites>
        ) : (
          <>
            <h1>Meus favoritos</h1>
            <FavoritesList>
              {favorites.map((favorite) => (
                <ProductItem
                  id={favorite.id}
                  key={favorite.id}
                  title={favorite.name}
                  image={favorite.image}
                  buttonText="Remover dos Favoritos"
                  onClick={() => handleRemoveFavorite(favorite.id)}
                />
              ))}
            </FavoritesList>
          </>
        )}
      </main>

      <Footer />
    </Container>
  );
}
