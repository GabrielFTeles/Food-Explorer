import { Container } from './styles';
import { api } from '../../services/api';

export function ProductItem({ image, title, price, quantity, buttonText, onClick }) {
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${image}`} alt={`Foto do ${title}`} />

      <div>
        <div className="dish-info">
          <h3>
            {
              quantity && (
                <span className="quantity">
                  {quantity} x
                </span>
              )
            }
            
            <span className="title">
              {title}
            </span>
            </h3>
          {
            price && (
            <span className="price">
              {
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(price * quantity)
              }
            </span>
            )
          }
        </div>

        <button onClick={onClick}>{buttonText}</button>
      </div>
    </Container>
  );
}