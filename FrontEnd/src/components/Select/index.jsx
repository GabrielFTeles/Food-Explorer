import { useState, useEffect } from "react";

import { Container } from "./styles";
import { CaretDown } from "@phosphor-icons/react";

export function Select({ startSelected, label, options, onSelect }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  function toggleSelect() {
    setActive(!active);
  }

  function handleSelected(option) {
    setSelected(option);
  }

  useEffect(() => {
    if (startSelected) {
      const optionFound = options.find((option) => option.value === startSelected);
      setSelected(optionFound);
      onSelect(optionFound.value);
    }

    onSelect(selected.value);
  }, [startSelected]);

  return (
    <Container>
      <label onClick={toggleSelect}>{label}</label>

      <div className={active ? "active" : ""} onClick={toggleSelect}>
        <span>{selected.title}</span>
        <CaretDown size={20} />

        <ul>
          {options
            .filter((option) => option.value !== selected.value)
            .map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  handleSelected(option);
                  onSelect(option.value);
                }}
              >
                <span>{option.title}</span>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}
