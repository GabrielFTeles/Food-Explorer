import { useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";

import { Plus, Minus, Receipt } from "@phosphor-icons/react";

import foodImg from "../../assets/Mask group.png";

export function Details() {
  const [quantity, setQuantity] = useState(1);
  const [newPrice, setNewPrice] = useState(25);

  function handleMinus() {
    if (quantity <= 1) return;

    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  return (
    <Container>
      <Header />
      <main>
        <BackButton />

        <div className="dish-info">
          <img src={foodImg} alt="" />

          <div className="dish-description">
            <h1>Salada Ravanello</h1>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div className="ingredients">
              <Ingredient title="alface" />
              <Ingredient title="cebola" />
              <Ingredient title="pão naan" />
              <Ingredient title="pepino" />
              <Ingredient title="rabanete" />
              <Ingredient title="tomate" />
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
              {`R$ ${String((newPrice * quantity).toFixed(2))
                .replace(".", ",")
                .padStart(2, "0")}`}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
