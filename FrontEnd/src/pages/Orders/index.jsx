import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useCart } from '../../hooks/cart';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { ProductItem } from '../../components/ProductItem';

import { CreditCard, CaretLeft } from '@phosphor-icons/react'
import PixIcon from '../../assets/PixIcon.svg';
import QrCode from '../../assets/QrCode.svg';

export function Orders() {
  const { cart, removeFromCart, getCartTotalPrice } = useCart();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [proceededToPayment, setProceededToPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('pix');

  const totalPrice = getCartTotalPrice();

  function handleProceedToPayment() {
    setProceededToPayment(true);
  }

  function handleMethodChange(method) {
    setPaymentMethod(method);
  }

  return (
    <Container>
      <Header />

       <main>
        {
          (!proceededToPayment || isDesktop) && (
            <div className="order">
              {
                !isDesktop && (
                  <BackButton />
                )
              }

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

              <span>Total: {" "}
                {
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalPrice)
                }
              </span>

              {
                (cart.length > 0 && !isDesktop) && (
                  <Button 
                    className="proceed-btn"
                    onClick={handleProceedToPayment}
                    title="Avançar"
                  />
                )
              }
            </div>
          )
        }

        {
          (proceededToPayment || isDesktop) && (
            <div className="payment">
              {
                !isDesktop && (
                  <button className="back-btn" onClick={() => setProceededToPayment(false)}>
                    <CaretLeft size={20} />
                    Voltar
                  </button>
                )
              }

              <h2>Pagamento</h2>

              <div className="payment-container">
                <div className="payment-methods">
                  <button 
                    className={paymentMethod === "pix" ? "active" : ""}
                    onClick={() => handleMethodChange('pix')}
                  >
                    <img src={PixIcon} alt="Pix" />
                    <span>PIX</span>
                  </button>

                  <button
                    className={paymentMethod === "credit" ? "active" : ""}
                    onClick={() => handleMethodChange('credit')}
                  >
                    <CreditCard size={30} />
                    <span>Crédito</span>
                  </button>
                </div>

                <div className="payment-info">
                  {
                    paymentMethod === "pix" && (
                      <div className="pix">
                        <img src={QrCode} alt="QR Code" />
                      </div>
                    )
                  }

                  {
                    paymentMethod === "credit" && (
                      <div className="credit-card">
                        <Input
                          type="text"
                          id="card-number"
                          label="Número do cartão"
                          placeholder="0000 0000 0000 0000"
                        />

                        <div>
                          <Input
                            type="text"
                            id="card-expiration"
                            label="Validade"
                            placeholder="04/25"
                          />

                          <Input
                            type="text"
                            id="card-cvc"
                            label="CVC"
                            placeholder="000"
                          />
                        </div>

                        <Button
                          title="Finalizar pagamento"
                        />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
       </main>

      <Footer />
    </Container>
  );
}