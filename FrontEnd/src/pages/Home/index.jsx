import { useEffect, useState } from 'react';
import { useDishes } from '../../hooks/dishes';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Category } from '../../components/Category';

import foodsImg from '../../assets/FoodsOnAir.png';
import { Hamburger, IceCream, Coffee } from '@phosphor-icons/react';

export function Home() {
  const { dishes } = useDishes();

  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  function filterDishesByCategory(data) {
    const meals = data.filter(dish => dish.category === 'meal');
    const desserts = data.filter(dish => dish.category === 'dessert');
    const drinks = data.filter(dish => dish.category === 'drink');

    setMeals(meals);
    setDesserts(desserts);
    setDrinks(drinks);
  }

  useEffect(() => {
    filterDishesByCategory(dishes);
  }, [dishes]);

  return (
    <Container>
      <Header />

      <main>
        <div className="introduction-container">
          <figure>
            <img src={foodsImg} alt="Foods throwed on air" />
          </figure>

          <div className="text-wrapper">
            <div className="text-content">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </div>

        <section className="dishes-section">
          {
            meals.length > 0 && (
              <Category 
                title="Refeições"
                dishes={meals}
                adminCard={
                  {
                    title: 'Adicionar Nova Refeição',
                    icon: Hamburger,
                  }
                }
              />
            )
          }

          {
            desserts.length > 0 && (
              <Category
                title="Sobremesas"
                dishes={desserts}
                adminCard={
                  {
                    title: 'Adicionar Nova Sobremesa',
                    icon: IceCream,
                  }
                }
              />
            )
          }

          {
            drinks.length > 0 && (
              <Category
                title="Bebidas"
                dishes={drinks}
                adminCard={
                  {
                    title: 'Adicionar Nova Bebida',
                    icon: Coffee,
                  }
                }
              />
            )
          }
        </section>
      </main>

      <Footer />
    </Container>
  );
}