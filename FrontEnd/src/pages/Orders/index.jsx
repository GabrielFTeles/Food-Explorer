import { useCart } from '../../hooks/cart';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ProductItem } from '../../components/ProductItem';

export function Orders() {
  const { cart, removeFromCart, getCartTotalPrice } = useCart();
  const totalPrice = formatPrice(getCartTotalPrice());

  function formatPrice(price) {
    return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  return (
    <Container>
      <Header />

       <main>
        <h1>Meu pedido</h1>

        <ul>
          {
            cart.map(product => (
              <ProductItem
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                buttonText="Remover"
                onClick={() => {removeFromCart(product.id)}}
              />
            ))
          }
        </ul>

        <span>Total: {totalPrice}</span>

        {
          cart.length > 0 && (
            <Button 
              title="Avançar"
            />
          )
        }
       </main>

      <Footer />
    </Container>
  );
}