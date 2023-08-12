import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";

import { Plus, Minus, Receipt } from "@phosphor-icons/react";

export function Details() {
  const params = useParams();

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

        {
          data && (
            <div className="dish-info">
              <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />

              <div className="dish-description">
                <h1>{data.name}</h1>

                <p>{data.description}</p>

                <div className="ingredients">
                  {
                    data.ingredients.map((ingredient, index) => (
                      <Ingredient 
                        key={index}
                        title={ingredient}
                      />
                    ))
                  }
                </div>
              </div>

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
            </div>
          )
        }
      </main>
      <Footer />
    </Container>
  );
}
