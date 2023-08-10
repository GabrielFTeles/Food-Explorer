import { Container } from './styles';

import { Header } from '../../components/Header';
import { Category } from '../../components/Category';

import foodsImg from '../../assets/FoodsOnAir.svg';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div className="introduction-container">
          <img src={foodsImg} alt="Foods throwed on air" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <section className="dishes-section">
          <Category 
            title="Refeições"
          />
          <Category 
            title="Sobremesas"
          />
          <Category 
            title="Bebidas"
          />
        </section>
      </main>

      <Footer />
    </Container>
  );
}