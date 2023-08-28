import CurrencyFormat from 'react-currency-format';

import { Container } from "./styles";

import { Input } from '../Input';

export function CurrencyInput({ label, onValueChange, ...rest }) {
  return (
    <Container>
      <label htmlFor="currencyInput">{label}</label>
      <CurrencyFormat
        {...rest}
        customInput={Input}
        id="currencyInput"
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        onValueChange={onValueChange}
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale={true}
      />
    </Container>
  );
}