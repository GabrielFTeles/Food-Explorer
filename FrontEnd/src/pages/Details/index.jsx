import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";

import { Plus, Minus, Receipt } from "@phosphor-icons/react";
import { Button } from "../../components/Button";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();
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
          <div className="dish-info">
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />

            <div className="dish-description">
              <h1>{data.name}</h1>

              <p>{data.description}</p>

              <div className="ingredients">
                {data.ingredients.map((ingredient, index) => (
                  <Ingredient key={index} title={ingredient} />
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

                <button>
                  <Receipt size={20} />
                  pedir ∙{" "}
                  {`R$ ${String((data.price * quantity).toFixed(2))
                    .replace(".", ",")
                    .padStart(2, "0")}`}
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
        )}
      </main>
      <Footer />
    </Container>
  );
}
