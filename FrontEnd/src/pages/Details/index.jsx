import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { IngredientTag } from "../../components/IngredientTag";

import { Plus, Minus, Receipt } from "@phosphor-icons/react";
import { Button } from "../../components/Button";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const { addToCart } = useCart();
  const { isAdmin } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(null);

  function handleMinus() {
    if (quantity <= 1) return;

    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleAddToCart() {
    addToCart({
      id: data.id,
      title: data.name,
      price: data.price,
      image: data.image,
      quantity,
    });

    navigate("/orders");
  }

  useEffect(() => {
    async function getData() {
      const { data } = await api.get(`/dishes/${params.id}`);

      setData(data);
    }

    getData();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <BackButton />

        {data && (
          <div className="dish">
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />

            <div className="dish-info">
              <div className="dish-description">
                <h1>{data.name}</h1>

                <p>{data.description}</p>

                <div className="ingredients">
                  {data.ingredients.map((ingredient, index) => (
                    <IngredientTag key={index} title={ingredient} />
                  ))}
                </div>
              </div>

              {!isAdmin && (
                <div className="buttons-wrapper">
                  <div className="counter">
                    <button onClick={handleMinus}>
                      <Minus size={24} />
                    </button>

                    <span>{String(quantity).padStart(2, "0")}</span>

                    <button onClick={handlePlus}>
                      <Plus size={24} />
                    </button>
                  </div>

                  <button onClick={handleAddToCart}>
                    <Receipt size={20} />
                    pedir ∙{" "}
                    {
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(data.price * quantity)
                    }
                  </button>
                </div>
              )}

              {isAdmin ? (
                <Button
                  onClick={() => navigate(`/edit/${params.id}`)}
                  title="Editar prato"
                  className="edit-button"
                />
              ) : null}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </Container>
  );
}
