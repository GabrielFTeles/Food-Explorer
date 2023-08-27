import { Container } from './styles';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

export function ProductItem({ id, image, title, price, quantity, buttonText, onClick }) {
  return (
    <Container>
      <Link to={`/details/${id}`}>
        <img src={`${api.defaults.baseURL}/files/${image}`} alt={`Foto do ${title}`} />
      </Link>

      <div>
        <div className="dish-info">
          <Link to={`/details/${id}`}>
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
          </Link>
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