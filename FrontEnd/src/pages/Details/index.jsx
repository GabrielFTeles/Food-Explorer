import { Container } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';

import foodImg from '../../assets/Mask group.png'
import { Ingredient } from '../../components/Ingredient';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <BackButton />

        <div className="dish-info">
          <img src={foodImg} alt="" />

          <div className="dish-description">
            <h1>Salada Ravanello</h1>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div className="ingredients">
              <Ingredient 
                title="alface"
              />
              <Ingredient
                title="cebola"
              />
              <Ingredient
                title="pão naan"
              />
              <Ingredient
                title="pepino"
              />
              <Ingredient
                title="rabanete"
              />
              <Ingredient
                title="tomate"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}