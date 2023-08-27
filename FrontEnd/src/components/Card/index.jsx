import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useFavorites } from "../../hooks/favorites";

import { Container } from "./styles";
import { CircleLoader } from "../CircleLoader";
import { Heart } from "../Heart";

import { PencilSimple } from "@phosphor-icons/react";
import { Counter } from "../Counter";

export function Card({ id, title, description, price, image }) {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { isAdmin } = useAuth();
  const { addToCart } = useCart();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

  function handleDetailsClick() {
    navigate(`/details/${id}`);
  }

  function handleAddToCart() {
    addToCart({ id, title, price, image, quantity });
  }

  async function handleFavorite() {
    setIsFavoriteLoading(true);

    if (isFavorited) {
      await removeFavorite(id);
    } else {
      await addFavorite(id);
    }

    setIsFavoriteLoading(false);
  }

  useEffect(() => {
    favorites.find((favorite) => favorite.id === id)
      ? setIsFavorited(true)
      : setIsFavorited(false);
  }, [favorites]);

  return (
    <Container>
      {isFavoriteLoading && <CircleLoader />}

      {isAdmin ? (
        <PencilSimple
          size={28}
          role="button"
          onClick={() => navigate(`/edit/${id}`)}
        />
      ) : (
        <Heart
          checked={isFavorited}
          onChange={handleFavorite}
          disabled={isFavoriteLoading}
        />
      )}

      <img
        src={`${api.defaults.baseURL}/files/${image}`}
        role="button"
        alt={`Foto do ${title}`}
        onClick={handleDetailsClick}
      />

      <h3 className="dish-name" role="button" onClick={handleDetailsClick}>
        <span>{title}</span> &gt;
      </h3>

      {isDesktop && (
        <p
          className="dish-description"
          role="button"
          onClick={() => navigate(`/edit/${id}`)}
        >
          {description}
        </p>
      )}

      <span className="price">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price * quantity)}
      </span>

      {!isAdmin && (
        <div className="buttons-wrapper">
          <Counter onUpdate={setQuantity} />

          <button onClick={handleAddToCart}>incluir</button>
        </div>
      )}
    </Container>
  );
}
