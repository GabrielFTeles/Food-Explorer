import { useState } from 'react';

import { Container } from './styles';
import { CaretDown } from '@phosphor-icons/react'

export function Select({ id, label, options, onSelect, ...rest}) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  function toggleSelect() {
    setActive(!active);
  }

  function handleSelected(option) {
    setSelected(option);
  }

  return (
    <Container>
      <label htmlFor={id}>{label}</label>

      <div className={active ? "active" : ""} onClick={toggleSelect}>
        <span>{selected}</span>
        <CaretDown  size={20} />

        <ul>
          {
            options.filter(option => option !== selected)
              .map((option, index) => (
                <li key={index} onClick={() => {
                  handleSelected(option);
                  onSelect(option);
                }}>
                  <span>{option}</span>
                </li>
            ))
          }
        </ul>
      </div>
    </Container>
  )
}