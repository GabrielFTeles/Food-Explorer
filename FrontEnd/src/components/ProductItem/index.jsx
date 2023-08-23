import { Container } from './styles';

import { api } from '../../services/api';

export function ProductItem({ image, title, price, quantity, buttonText, onClick }) {
  const totalPrice = formatPrice(price * quantity);

  function formatPrice(price) {
    return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${image}`} alt={`Foto do ${title}`} />

      <div>
        <div className="dish-info">
          <h3>
            <span className="quantity">
              {quantity} x
            </span>
            
            <span className="title">
              {title}
            </span>
            </h3>
          {
            price && (
            <span className="price">
              {totalPrice}
            </span>
            )
          }
        </div>

        <button onClick={onClick}>{buttonText}</button>
      </div>
    </Container>
  );
}