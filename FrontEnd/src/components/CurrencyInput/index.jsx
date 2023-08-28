import CurrencyFormat from 'react-currency-input-field';

import { Container } from "./styles";

export function CurrencyInput({ label, onValueChange, ...rest }) {
  return (
    <Container>
      <label htmlFor="currencyInput">{label}</label>
      <CurrencyFormat
        {...rest}
        required
        minLength={1}
        id="currencyInput"
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        onValueChange={onValueChange}
        allowNegativeValue={false}
        decimalScale={2}
      />
    </Container>
  );
}