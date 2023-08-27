import { useEffect, useState } from "react";

import { Container } from "./styles";

import { Minus, Plus } from "@phosphor-icons/react";

export function Counter({ onUpdate }) {
  const [quantity, setQuantity] = useState(1);

  function handleMinus() {
    if (quantity <= 1) return;
    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  useEffect(() => {
    onUpdate(quantity);
  }, [quantity]);
    
  return (
    <Container>
      <button onClick={handleMinus}>
        <Minus size={20} />
      </button>

      <span>{String(quantity).padStart(2, "0")}</span>

      <button onClick={handlePlus}>
        <Plus size={20} />
      </button>
    </Container>
  );
}
